import React, { Component } from 'react'
import { Link } from "gatsby"

export default class AllPost extends Component {

    filterExcerpt = (excerpt) => {
      if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(excerpt)) {
        console.log('link in the excerpt');
      }else{
        console.log('no link');
      }
    }
    
    render() {
      let data = this.props.data;
      let ignorefirst = this.props.ignorefirst;
      
      return (
        <section className="container">
          <div className="hero-body">
            <div className="columns is-multiline is-1-mobile">
              {
                data.map((node, index) => {
                  // console.log("node ", node)
                  return (ignorefirst && index === 0) ? null : 
                  <div key={index} className={'column is-full' }>
                    <article className="card"> 
                      {
                        // node.node.featured_media === undefined ? null :
                        //  node.node.featured_media.localFile === null ? null :
                        //  <div className="card-image">
                        //   <figure className="image">
                        //     <img src={node.node.featured_media.localFile.childImageSharp.original.src} alt={data.title} />
                        //   </figure>
                        // </div>
                        //  <div className="card-image">
                        //   <figure className="image">
                        //     <img src={node.node.spark_media} alt={data.title} />
                        //   </figure>
                        // </div>
                      }
                      <div className="card-content">
                        <h3 className="title is-4">
                          <Link to={'/post/' + node.node.slug} dangerouslySetInnerHTML={{__html:node.node.title + " "}} />
                        </h3>
                        <div className="post-meta">
                          <span>{node.node.author.name}</span> on 
                          {node.node.categories && node.node.categories.map(
                              category => <span className="tag" key={category.id}><Link key={category.id} to={'/categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
                          )}
                          <span>|</span>
                          <time className="tag is-white" dateTime={new Date(node.node.date).toLocaleDateString("en-US")}>{node.node.date}</time>
                        </div>

                        {/* <p className="subtitle is-6" dangerouslySetInnerHTML={{__html:"@" + node.node.author.name + " "}} /> */}
                        <p className="post-excerpt" dangerouslySetInnerHTML={{__html:node.node.excerpt}}></p>
                        <p>{this.filterExcerpt(node.node.excerpt)}</p>
                        {/* <div className="media">
                          <div className="media-left">
                            <figure className="image is-48x48">
                              <img src={node.node.author.avatar_urls.wordpress_96} alt={node.node.author.name}/>
                            </figure>
                          </div>
                          <div className="media-content">
                            <h3 className="title is-4">
                              <Link to={'/post/' + node.node.slug} dangerouslySetInnerHTML={{__html:node.node.title + " "}} />
                            </h3>
                            <p className="post-excerpt" dangerouslySetInnerHTML={{__html:node.node.excerpt}}></p>
                            <p className="subtitle is-6" dangerouslySetInnerHTML={{__html:"@" + node.node.author.name + " "}} />
                          </div>
                        </div> */}

                        <div className="content">
                          <div className="tags ">
                            <time className="tag is-white" dateTime={new Date(node.node.date).toLocaleDateString("en-US")}>{node.node.date}</time>
                            {node.node.categories && node.node.categories.map(
                              category => <span className="tag" key={category.id}><Link key={category.id} to={'/categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></span>
                            )}
                          </div>
                        </div>

                      </div>
                    </article>
                  </div>
                })
              }
            </div>
          </div>
        </section>
      )
    }
}