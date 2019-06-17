import React, { Component } from 'react'
import Layout from "../layouts/index"
// import LatestPost from "../components/latest-post/index"
import AllPost from "../components/all-post/index"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"

class BlogPage extends Component {

  render() {
    // const { group, index, first, last, pageCount} = this.props.pageContext; //pageCount
    const allPosts = this.props.pageContext.allPosts
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
          <SEO title="Home" />

        	{/* <LatestPost data={group[0].node} /> */}

          {/* <hr /> */}

        	<AllPost data={allPosts.edges} ignorefirst="true"/>

          {/* <AllPostPagination index={index} first={first} last={last} pageCount={pageCount}/> */}

        </Layout>
    )
  }
}

export default BlogPage