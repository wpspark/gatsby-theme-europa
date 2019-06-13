// import React from "react"
import React, { Component } from 'react'

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from '../components/BlogList'
import AllCategroy from '../components/AllCategory'
import FirstPost from '../components/FirstPost'
// import AllCategroy from '../components/AllCategory'

import '../components/rootStyle.scss'

class MainIndexPage extends Component {

  render() {
    // console.log(this.props);
    const data = this.props.data;
    return (
      <Layout>
        <SEO title="Home" />
        
        <FirstPost data={data.wordpressPost}/>

        <AllCategroy data={data.allWordpressCategory} />
        
        <div className="post-lists">
          <div className="uk-container">
            <BlogList pageContext={this.props.pageContext}/>
          </div>
        </div>
        
      </Layout>
    )
  }
}
export default MainIndexPage;

// export default IndexPage
export const postsQuery3 = graphql`
    query postsQuery3{
        allWordpressPost(
          sort: {
            fields: [date]
            order: DESC
          }
        ){
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
                    
                }
            }
        }
        allWordpressCategory{
          edges{
            node{
              id
              wordpress_id
              slug
              name
              count
            }
          }
        }
        wordpressPost{
          id
          title
          slug
          categories {
            id
            name
            slug
          }
          tags {
            id
          }
        }
      }
`