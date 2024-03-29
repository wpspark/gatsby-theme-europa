import React, { Component } from 'react'
import Header from "../components/siteHeader/postHeader"
import Footer from "../components/siteFooter/index"

import "../utils/typography"

class postLayout extends Component {
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header 
          slug={this.props.slug} 
          title={this.props.title} 
          wordpressSiteMetadata={this.props.wordpressSiteMetadata} 
          featuredImage={this.props.featuredImage} 
          data={this.props.data}
        />

      	<main>
	        <div className="container is-fluid common-spacing">
            {this.props.children}
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default postLayout;

