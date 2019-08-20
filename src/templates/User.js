import React, { Component } from 'react'
import Layout from "../layouts/userIndex"
import SEO from "../utils/seo"
import { Link } from "gatsby"


class UserTemplate extends Component {
    filterExcerpt = (excerpt) => {
        if( new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(excerpt) ) {
          // let reg = /<a\s*(.*)\>(.*)<\/a>/g;
          let reg = /<a\b[^>]*>(.*?)<\/a>/g;
  
          let filterText = excerpt.replace(reg, "");
          return filterText;
        }else{
          return excerpt;
        }
    }
    render() {
        const data = this.props.pageContext.wordpressPost;
        const user = this.props.pageContext.userData;
        return (
                <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} title={user.name} data={this.props.pageContext.userData}>
                    
                    <SEO title={user.name} />

                    <section className="hero">
                        <div className="hero-bodyy">
                            <div className="container">

                                {
                                    data
                                    ?
                                    data.map( (post, index) => {
                                        post.slug = post.slug.includes('google-ads') ? post.slug.replace("google-ads", "googleads"): post.slug;
                                        return(
                                            <div key={index} className='column is-three-fifths is-offset-one-fifth'>
                                                <article className="card"> 
                                                
                                                <div className="card-content">
                                                    <h4 className="title is-3">
                                                    <Link className="has-text-black" to={'/post/' + post.slug} dangerouslySetInnerHTML={{__html:post.title + " "}} />
                                                    </h4>
                                                    <p className="post-meta has-text-grey">
                                                    <Link className="has-text-grey" to={`user/${post.spark_user.slug.toLowerCase()}`}>{post.spark_user.name}</Link>
                                                    <span> on </span> 

                                                    {post.categories && post.categories.map(
                                                        category => <Link className="has-text-grey" key={category.id} to={'/categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /></Link>
                                                    )}
                                                    <span> | </span>
                                                    
                                                    <time className="" dateTime={new Date(post.date).toLocaleDateString("en-US")}>{post.date}</time>
                                                    </p>
                                                    <p className="post-excerpt has-text-grey-dark" style={{margin:'20px 0px 0px'}} dangerouslySetInnerHTML={{__html:this.filterExcerpt(post.excerpt)}}/>
                                                    

                                                </div>
                                                </article>
                                            </div> 
                                        )   
                                    })
                                    : <p>No Post for this Author</p>
                                }

                            </div>
                        </div>
                    </section>


                </Layout>
        )
    }
}

export default UserTemplate