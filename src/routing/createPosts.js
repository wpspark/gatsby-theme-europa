const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

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
        author {
          id
          name
          slug
          avatar_urls{
            wordpress_96
          }
        }
        spark_media
        tags {
          id
          name
          slug
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

      const postTemplate = path.resolve("./src/templates/post.js");
      const postsTemplate = path.resolve("./src/templates/blog.js");

    
      createPaginatedPages({
        edges: result.data.allWordpressPost.edges,
        createPage: createPage,
        pageTemplate: slash(postsTemplate),
        pageLength: 7,
        pathPrefix: '/',
        // pathPrefix: 'your_page_name',
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`, // This is optional and this is the default
        context: {
          wordpressSiteMetadata: result.data.wordpressSiteMetadata
        },
      });
      
      _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                slug: edge.node.slug,
                wordpressPost: edge.node,
                site: result.data.site,
                wordpressSiteMetadata: result.data.wordpressSiteMetadata
              },
          });
      });
      resolve();

    });
  });
}

