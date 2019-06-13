import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Layout from "../components/layout"
import BlogList from '../components/BlogList'

class IndexPage extends Component {
    
  render() {
    return (
        <Layout>
            <BlogList pageContext={this.props.pageContext}/>
        </Layout>
    )
  }
}

export default IndexPage
