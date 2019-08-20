import React, { Component } from 'react'
import Layout from "../layouts/catIndex"
import SEO from "../utils/seo"
import AllPost from "../components/allPost/index"
import { graphql } from "gatsby"

class CategoryPage extends Component {
    
  render() {
    
    const category = this.props.pageContext.wordpressCategory;
    const currentCategoryPosts = this.props.data.allWordpressPost;
    
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} title={category.name} data={currentCategoryPosts}>
        
        	<SEO title="Category Page" titleTemplate={category.name} />

        	<AllPost data={currentCategoryPosts.edges} />

        </Layout>
    )
  }
}

export default CategoryPage

export const categoryQuery = graphql`
  query currentCategoryQuery($slug: String!) {

    allWordpressPost(filter: {
        categories: {
            elemMatch: {
                slug: { eq: $slug }
            }
        }
    }) {
        edges{
            node{
                id
                title
                excerpt
                slug
                date(formatString: "MMMM DD, YYYY")
                categories{
                    id
                    name
                    slug
                    link
                }
                spark_user {
                  name
                  slug
                  avatar_urls {
                    wordpress_96
                  }
                }
                spark_media
            }
        }
    }
  }
`