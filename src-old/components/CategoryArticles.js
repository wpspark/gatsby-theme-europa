import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Link from 'gatsby-link'
import styled from 'styled-components'
import './rootStyle.scss'

const ArticleWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
    .single-article-box{
        &:hover{
            .image-wrapper{
                transform:scale(.98, .98);
            }
        }
    }
    .image-wrapper{
        margin-bottom:10px !important;
        transform:scale(1, 1);
        transition:all 0.4s ease;
        >img{
            border-radius:5px;
        }
    }
    
`
const SingleArticleBox = styled.div`
    a{
        color:#4c4c4c;
        &:hover{
            text-decoration:none;
            h4{
                color:#3a3a3a;
            }
        }
    }
    h4{
        font-size:20px;
        transition:all 0.4s ease;
    }
    // span.cat{
    //     a{
    //         color:#929292;
    //         margin:0px 5px;
    //         transition:all 0.4s ease;
    //         &:hover{
    //             color:#3a3a3a;
    //         }
    //     }
        
    // }
`
const FeaturedImage = styled.div`
    img{
        /* border:solid 1px #ddd; */
        object-fit: cover;
    }
`
// const PostAuthor = styled.div`
//     position:absolute;
//     text-align:center;
//     left:0;
//     right:0;
//     bottom:-20px;
//     img{
//         width:50px;
//         height:50px;
//         border-radius:50%;
//     }
// `

class CategoryArticles extends Component {

    // <PostAuthor>
    //                                 <img src="https://secure.gravatar.com/avatar/0989fdc8ffeffc2bdeba299560136f77" alt=""/>
    //                             </PostAuthor>

render() {
    const data = this.props.data;
    return (
            <ArticleWrapper className="article-wrapper uk-grid uk-child-width-1-1@s uk-child-width-1-2@m"
                uk-scrollspy="cls: uk-animation-fade; target: .single-article-box; delay: 500; repeat: true"
            >
                {data.map(({node}) => (                        
                    <SingleArticleBox key={node.id} className="single-article-box uk-card uk-margin-bottom">
                        <FeaturedImage className="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <div className="image-wrapper uk-transition-opaque">
                                <Link to={'post/' + node.slug}>
                                    { node.featured_media === undefined ? null : 
                                        <img className="uk-height-medium uk-width-xlarge"  
                                        src={node.featured_media.localFile.childImageSharp.original.src} alt="" />
                                    }
                                </Link>
                                
                            </div>
                        </FeaturedImage>
                        
                        <div className="uk-margin">
                            <ul className="uk-iconnav">
                                {node.categories && node.categories.map(
                                        category => <li key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></li>
                                    )
                                }
                            </ul>
                        </div>

                        <Link to={'post/' + node.slug}>
                            <h4 dangerouslySetInnerHTML={{__html:node.title}}/>
                        </Link>
                        
                    </SingleArticleBox>
                ))}
            </ArticleWrapper>
    )
  }
}

export default CategoryArticles;