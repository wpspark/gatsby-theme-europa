import React, { Component } from 'react'
import { Link } from "gatsby"

export default class AllPost extends Component {

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
      let data = this.props.data;
      let ignorefirst = this.props.ignorefirst;
      console.log(data)
      return (
        <section className="container">
          <div className="hero-body">
            <div className="columns is-multiline is-1-mobile">
              {
                data.map((node, index) => {
                  // console.log("node ", node)
                  return (
                  <div key={index} className='column is-three-fifths is-offset-one-fifth'>
                    <article className="card"> 
                      
                      <div className="card-content">
                        <h4 className="title is-3">
                          <Link className="has-text-black" to={'/post/' + node.node.slug} dangerouslySetInnerHTML={{__html:node.node.title + " "}} />
                        </h4>
                        <p className="post-meta has-text-grey">
                          <Link className="has-text-grey" to={'user/'+node.node.author.slug}>{node.node.author.name}</Link>
                          {/* <span>{node.node.author.name}</span>s */}
                          <span> on </span> 

                          {node.node.categories && node.node.categories.map(
                              category => <Link className="has-text-grey" key={category.id} to={'/categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /></Link>
                          )}
                          <span> | </span>
                          
                          <time className="" dateTime={new Date(node.node.date).toLocaleDateString("en-US")}>{node.node.date}</time>
                        </p>
                        <p className="post-excerpt has-text-grey-dark" style={{margin:'20px 0px 0px'}} dangerouslySetInnerHTML={{__html:this.filterExcerpt(node.node.excerpt)}}/>
                        

                      </div>
                    </article>
                  </div>
                )})
              }
            </div>
          </div>
        </section>
      )
    }
}