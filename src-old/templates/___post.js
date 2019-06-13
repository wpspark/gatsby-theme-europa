import React, { Component } from "react"
import SEO from '../components/seo'
import Layout from '../components/layout'
import {Link, graphql } from 'gatsby'
import styled from 'styled-components'
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
import '../components/rootStyle.scss'

const Back = styled.a`
    background:red;
    color:white;
    padding:10px 30px;
    margin-bottom:20px;
    display:inline-block;
`

const SingleArticle = styled.article`
    font-family: 'Noto Sans JP', sans-serif;
    img{
        object-fit:cover;
    }
`
const PostContent = styled.div`
    display:grid;
    grid-template-columns:2.5fr .5fr;
`


class PostTemplatewww extends Component {
    render() {
        const post = this.props.data.wordpressPost
        console.log(post);
        const featuredMedia = this.props.pageContext.featuredImage;
        return (
            <Layout>
                <SEO title={post.title}/>
                <SingleArticle className="uk-article uk-padding uk-background-muted">
                    <img src={featuredMedia.localFile.childImageSharp.original.src} alt=''/>
                    
                    <PostContent className="post-content">
                        <div className="article-left">
                            <div>
                                <span>{post.date}</span>
                            </div>
                           <h1 className="uk-article-title" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                        <div className="article-right">
                            <div>
                                {post.categories && post.categories.map(
                                        category => <Link key={category.id} to={'categories/'+ category.slug}><div dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                                    )
                                }
                            </div>
                        </div>
                    </PostContent>

                </SingleArticle>

                {/* <Link to={'/posts'} className="uk-margin uk-margin-remove-left">
                    <Back>Back</Back>
                </Link> */}
            </Layout>
            
        )
    }
}


export default PostTemplateww

export const pageQueryww = graphql`
    query currentPostQueryww($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            date(formatString: "YYYY MMMM DD")
            categories {
                id
                name
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`