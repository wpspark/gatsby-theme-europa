import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import styled from 'styled-components'
import SEO from "../components/seo"
import Layout from "../components/layout"
// import { graphql } from 'gatsby'

// import Img from "gatsby-image"

const TgExcerptLink = styled.a`
    background:red;
`
const ArticleWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
`
const SingleArticleBox = styled.div`
    background:#eee;
`

class PostsTemplate extends Component {
    render() {
        const data = this.props.data
        console.log(this.props);
        return(
            <Layout>
                <SEO title="all posts"  />
                <div className="articles-page">
                    <h1>Posts</h1>
                    <ArticleWrapper className="article-wrapper ">
                        {data.allWordpressPost.edges.map(({node}) => (                        
                            <SingleArticleBox key={node.slug} className="single-article-box uk-card uk-card-default uk-card-body">
                                <Link to={'post/' + node.slug}>
                                <h3 dangerouslySetInnerHTML={{__html:node.title}}/>
                                </Link>
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                {/* <div dangerouslySetInnerHTML={{__html:node.excerpt}} /> */}
                                <Link to={'post/' + node.slug}>
                                    <TgExcerptLink>Read More</TgExcerptLink>
                                </Link>
                                <div>
                                    <span>Categories: </span>
                                    <span className="cat">{node.categories && node.categories.map(category => <span dangerouslySetInnerHTML={{__html:category.name}} /> )}</span>
                                    {/* <span dangerouslySetInnerHTML={{__html:node.categories[0].name}} /> */}
                                </div>
                            </SingleArticleBox>
                        ))}
                    </ArticleWrapper>
                </div>
            </Layout>
        )
    }
}
// {data.allWordpressPost.edges.map(({node}) => (
//     <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
//             <h3>{node.title}</h3>

//         <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

//         {node.date}
//     </div>
// ))}


// {data.allWordpressPost.edges.map(  ({node}) => (
//     <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
//             <h3>{node.title}</h3>

//         <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

//         {node.date}
//     </div>
// ))}


// export default PostsTemplate

// export const pageQuery = graphql`
//     query currentPostQuery($id: String!) {
//         wordpressPost(id: { eq: $id }) {
//             title
//             content
//         }
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `

// PostsTemplate.propTypes = {
//     // data: PropTypes.object.isRequired,
//     // edges: PropTypes.array,
// }

export default PostsTemplate

// export const postsQuery1 = graphql`
//     query postsQuery1{
//         allWordpressPost{
//             edges{
//                 node{
//                     id
//                     title
//                     excerpt
//                     slug
//                     date(formatString: "MMMM DD, YYYY")
//                     categories{
//                         id
//                         name
//                         slug
//                         link
//                     }
//                 }
//             }
//         }
//     }
// `