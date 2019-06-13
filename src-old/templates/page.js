import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'
import "../utils/typography"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
      	<SEO title={currentPage.title}/>

        <section className="uk-section ">
          <div className="uk-container">
            <div className="uk-padding uk-box-shadow-small uk-background-muted">
              <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
              
              <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`