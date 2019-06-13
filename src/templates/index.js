import React, { Component } from 'react'
import Layout from "../layouts/index"
import SEO from "../utils/seo"

class BlogPage extends Component {
    
  render() {
    return (
        <Layout>
        	<SEO title="Home" />
        	<h1>Blog Page - Index</h1>
        </Layout>
    )
  }
}

export default BlogPage