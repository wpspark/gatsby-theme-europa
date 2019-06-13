import React, {Component} from "react"
// import graphql from 'graphql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
// import styled from 'styled-components'
import SEO from "../components/seo"
import Layout from "../components/layout"


class CategoryTemplate extends Component {
    render() {
        const data = this.props.data;

        return ( 
            <Layout>
                <SEO title="All Categories" />
                
                {data.allWordpressCategory.edges.map(({node}) => (                        
                    <div key={node.slug} className="single-article-box uk-card uk-card-default uk-card-body">
                        <Link to={'categories/' + node.slug}>
                            <h3 dangerouslySetInnerHTML={{__html:node.name}}/>
                        </Link>
                        
                        
                        <div>
                            <span>Post Count: </span>
                            <span className="cat">{node.count}</span>
                            {/* <span dangerouslySetInnerHTML={{__html:node.categories[0].name}} /> */}
                        </div>
                    </div>
                ))}
            </Layout>

        )
    }
}

export default CategoryTemplate

export const categoryQuery = graphql`
    query categoryQuery{
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
    }
`
