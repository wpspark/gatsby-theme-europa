import React, { Component } from 'react'

export default class PostAuthor extends Component {
    
    render() {
      let data = this.props.data;
      
      return (
        
          data === undefined ? null : 
          <section className="hero is-light" style={{
            margin: "25px auto"
          }}>
            <div className="hero-body">
              <div className="container-fluid has-text-centered">
                <h1 className="title">{data.name}</h1>
                
                <div className="is-inline-block">
                  <figure className="image is-96x96 image-objectfit-contain">
                    <img className="is-rounded" width="96" height="96" 
                      src={ data.avatar_urls.wordpress_96 } 
                      alt={ data.name }
                    />
                  </figure>
                </div>

                <h2 className="subtitle">{data.description}</h2>

              </div>
            </div>
          </section>
        
      )
    }
}