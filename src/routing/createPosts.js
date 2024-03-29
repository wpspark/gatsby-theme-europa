const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const postQuery = `
{
  site{
    siteMetadata{
      title
      description
      author
      disqusShortname
      wordpressBaseUrl
    }
  } 
  wordpressSiteMetadata{
    name
    description
    url
    home
  }
  allWordpressPost(
    sort: {
      fields: [date]
      order: DESC
    }
  ){
    edges {
      node{
        id
        wordpress_id
        title
        excerpt
        content
        slug
        date(formatString: "MMMM DD, YYYY")
        categories{
            id
            name
            slug
            link
        }
        spark_media
        spark_user {
          name
          slug
          avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
}`
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(postQuery)
    .then(result => {
    
      if(result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      /**
       * for pagination
       */
      const postsPerPage = 3;
      const numberOfPosts = result.data.allWordpressPost.edges.length;
      const postTemplate = path.resolve("./src/templates/post.js");
      const postsTemplate = path.resolve("./src/templates/blog.js");

      const numberOfPostsPages = Math.ceil(numberOfPosts/postsPerPage);
      for(let pageIndex = 0; pageIndex < numberOfPostsPages; pageIndex++){
        const pageNumber = pageIndex + 1;
        const path = pageIndex === 0 ? '/' : `/posts/${pageNumber}`
        const skip = pageIndex * postsPerPage;

        function getPreviousPageLink(){
          if(!pageIndex) return null
          if(pageIndex === 1) return '/'
          return `/posts/${pageIndex}` 
        }

        function getNextPageLink(){
          if(pageNumber < numberOfPostsPages){
            return `/posts/${pageNumber + 1}`
          }else{
            return null;
          }
        }

        createPage({
          path: path,
          component: slash(postsTemplate),
          context: {
            limit: postsPerPage,
            skip: skip,
            next: getNextPageLink(),
            prev: getPreviousPageLink(),
            wordpressSiteMetadata: result.data.wordpressSiteMetadata,
            allPosts: result.data.allWordpressPost,
            numberOfPostsPages: numberOfPostsPages
          },
        });

      }
      
      _.each(result.data.allWordpressPost.edges, (edge, index) => {
          edge.node.slug = edge.node.slug.includes('google-ads') ? edge.node.slug.replace("google-ads", "googleads"): edge.node.slug;
          createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                slug: edge.node.slug,
                wordpressPost: edge.node,
                site: result.data.site,
                wordpressSiteMetadata: result.data.wordpressSiteMetadata,
                prev: index === 0 ? null : result.data.allWordpressPost.edges[index-1].node.slug,
                next: index === ( result.data.allWordpressPost.edges.length - 1 ) ? null : result.data.allWordpressPost.edges[index+1].node.slug
              },
          });
      });
      resolve();

    });
  });
}

