import React, { Component } from 'react'
import Layout from "../layouts/index"
import AllPost from "../components/allPost/index"
import AllPostPagination from "../components/allPost/pagination"
import SEO from "../utils/seo"
import {graphql} from 'gatsby'

class BlogPage extends Component {

  render() {
    const next = this.props.pageContext.next
    const prev = this.props.pageContext.prev
    const myNewPost = this.props.data.allWordpressPost
    const numberOfPostsPages = this.props.pageContext.numberOfPostsPages
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
          <SEO title="Home" />

        	<AllPost data={myNewPost.edges} ignorefirst="false"/>

          <AllPostPagination prev={prev} next={next} pageCount={numberOfPostsPages}/>

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