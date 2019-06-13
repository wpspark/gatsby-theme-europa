import React, { Component } from 'react'
import Header from "../components/siteHeader/catHeader"
import Footer from "../components/siteFooter/index"

import "../utils/typography"

class postLayout extends Component {
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header 
          title={this.props.title} 
          data={this.props.data}
          wordpressSiteMetadata={this.props.wordpressSiteMetadata} 
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

