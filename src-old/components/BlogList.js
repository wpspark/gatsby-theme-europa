import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Link from 'gatsby-link'
import styled from 'styled-components'
import './rootStyle.scss'


// const NavLink = props => {
//     if (!props.test) {
//       return <Link to={props.url}>{props.text}</Link>
//     } else {
//       return <span>{props.text}</span>
//     }
// }


const ArticleWrapper = styled.div`
    /* display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:30px; */
`

const FirstGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:30px;
    margin-bottom:30px;
    .single-article-box{
        &:hover{
        .image-wrapper{
            transform:scale(.98, .98);
        }
    }
    }
    .image-wrapper{
        margin-bottom:0 !important;
        transform:scale(1, 1);
        transition:all 0.4s ease;
        >img{
            border-radius:5px;
        }
    }
    
    .post-author-meta{
        bottom:0px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 10px;
        overflow: hidden;
        background-image: linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2));
        >img{
            position: absolute;
            bottom: 0;
            filter: blur(25px);
            left: -55%;
            z-index: 0;
            -webkit-transform: scale(1.5) translate(0);
            -moz-transform: scale(1.5) translate(0);
            transform: scale(1.5) translate(0);
            max-width: none;
            width: auto;
            height: auto;
        }
        .author-img, .post-cat{
            z-index:1;
        }
        .post-cat{
            a{
                color:white;
                &:hover{
                    color:white;
                }
            }
        }
        .author-img{
            img{
                width:50px;
                height:50px;
                border-radius:50%;
                margin:0;
            }
        }
    }
`
// const SecondGroup = styled.div`
//     display:grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap:30px;
//     .single-article-box{
//         &:hover{
//             .image-wrapper{
//                 transform:scale(.98, .98);
//             }
//         }
//     }
//     .image-wrapper{
//         margin-bottom:10px !important;
//         transform:scale(1, 1);
//         transition:all 0.4s ease;
//         >img{
//             border-radius:5px;
//         }
//     }
// `


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
    span.cat{
        a{
            color:#929292;
            margin:0px 5px;
            transition:all 0.4s ease;
            &:hover{
                color:#3a3a3a;
            }
        }
        
    }
`
const FeaturedImage = styled.div`
    .image-wrapper{
        margin-bottom:35px;
    }
`
const PostAuthor = styled.div`
    position:absolute;
    text-align:center;
    left:0;
    right:0;
    bottom:-20px;
    img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
`


class BlogList extends Component {
  render() {
    // const { group, index, first, last, pageCount } = this.props.pageContext;
    const { group } = this.props.pageContext;
    console.log(group);

    // const firstGroup = group.slice(0, 2);
    // const secondGroup = group.slice(3);

    // const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
    // const nextUrl = (index + 1).toString();

    // <SecondGroup className="secondGroup uk-grid uk-child-width-1-1@s uk-child-width-1-3@m">
                    
    //     {secondGroup.map(({node}) => (  
    //         <SingleArticleBox key={node.id} className="single-article-box uk-margin-bottom">
                                    
    //             <FeaturedImage className="uk-inline-clip uk-transition-toggle" tabindex="0">
    //                 <div className="image-wrapper uk-transition-opaque">
    //                     <Link to={'post/' + node.slug}>
    //                         <img className="uk-height-medium uk-width-expand" src={node.featured_media.localFile.childImageSharp.original.src} alt=""/>
    //                     </Link>

    //                     <PostAuthor>
    //                         <img src="https://secure.gravatar.com/avatar/0989fdc8ffeffc2bdeba299560136f77" alt=""/>
    //                     </PostAuthor>
    //                 </div>
    //             </FeaturedImage>

    //             <div className="uk-margin">
    //                 <ul className="uk-iconnav">
    //                     {node.categories && node.categories.map(
    //                             category => <li key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></li>
    //                         )
    //                     }
    //                 </ul>
    //             </div>
                
    //             <Link to={'post/' + node.slug}>
    //                 <h4 dangerouslySetInnerHTML={{__html:node.title}}/>
    //             </Link>

    //         </SingleArticleBox>
    //     ))}
    //     </SecondGroup>
    return (
        <div className="articles-page">
            
            {/* <h1>{pageCount} Pages</h1> */}
            <ArticleWrapper className="article-wrapper ">
                
                <FirstGroup className="firstGroup uk-grid uk-child-width-1-1@s uk-child-width-1-2@m">

                {group.map(({node}) => (
                    
                    <SingleArticleBox key={node.id} className="single-article-box uk-card uk-margin-large-bottom">
                                            
                        <FeaturedImage className="uk-transition-toggle uk-margin" tabindex="0">
                            <div className="image-wrapper uk-transition-opaque">
                                <Link to={'post/' + node.slug} className="uk-display-block">
                                    <div className="uk-cover-container uk-height-medium">
                                        {
                                            node.featured_media === undefined ? null : 
                                            <img className="uk-cover" src={node.featured_media.localFile.childImageSharp.original.src} alt="" uk-img="" uk-cover="" />
                                        }
                                    </div>
                                </Link>
                                
                                <PostAuthor className="post-author-meta">
                                    
                                    <div className="author-img">
                                        <span>
                                            {/* {
                                                node.author.avatar_urls === undefined ? null : 
                                                <img src={node.author.avatar_urls.wordpress_96} alt={node.author.name}/>
                                            } */}
                                        </span>
                                    </div>
                                    <div className="post-cat">
                                        <span className="cat">
                                            {node.categories && node.categories.map(
                                                    category => <Link key={category.id} to={'categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                                                )
                                            }
                                        </span>
                                    </div>
                                </PostAuthor>
                            </div>
                            
                        </FeaturedImage>

                        <Link to={'post/' + node.slug}>
                            <h3 className="uk-margin-remove-bottom" dangerouslySetInnerHTML={{__html:node.title}}/>
                        </Link>

                        
                    </SingleArticleBox>
                ))}
                </FirstGroup>

                <hr className="uk-margin-medium" />

                
            </ArticleWrapper>

            {/* <div className="previousLink">
                <NavLink test={first} url={'posts/' + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={'posts/' + nextUrl} text="Go to Next Page" />
            </div> */}
        </div>
    )
  }
}
export default BlogList;



