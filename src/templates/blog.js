import React, { Component } from 'react'
import Layout from "../layouts/index"
// import LatestPost from "../components/latest-post/index"
import AllPost from "../components/all-post/index"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"
import {graphql} from 'gatsby'

class BlogPage extends Component {

  render() {
    // const { group, index, first, last, pageCount} = this.props.pageContext; //pageCount
    // const allPosts = this.props.pageContext.allPosts
    const next = this.props.pageContext.next
    const prev = this.props.pageContext.prev
    const myNewPost = this.props.data.allWordpressPost
    const numberOfPostsPages = this.props.pageContext.numberOfPostsPages
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
          <SEO title="Home" />

        	{/* <LatestPost data={group[0].node} /> */}

          {/* <hr /> */}

        	<AllPost data={myNewPost.edges} ignorefirst="false"/>

          <AllPostPagination prev={prev} next={next} pageCount={numberOfPostsPages}/>

          {/* {prev && <Link to={prev}>Newer</Link>}
          {next && <Link to={next}>Older</Link>} */}

        </Layout>
    )
  }
}

export default BlogPage


export const query = graphql`
  query PostQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: {
        fields: [date]
        order: DESC
      }
      limit: $limit
      skip: $skip
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
  }
`