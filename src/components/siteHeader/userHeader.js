import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import CategoryMenu from "../categoryMenu/index"
import Helmet from "react-helmet"

export default class postHeader extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }
    toggleOffCanvasMenu = () => {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.marginRight = "250px";
    }
    
    render() {
      let authorImage = this.props.data;
      
      const zindexUp = {
          position:'fixed',
          zIndex:'2',
          padding:'25px',
          width:'100%'
      }

      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite4 {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return (
              <nav role="navigation">
                <Helmet
                  link={[
                    {
                      "rel": "icon",
                      "type": "image/png",
                      "href": sparkData.favicon
                    },
                    {
                      "rel": "stylesheet",
                      "href": 'https://fonts.googleapis.com/css?family=Cardo|Fira+Sans:400,700&display=swap', 
                    }
                  ]}
                />

                <div className="navbar-menuu" style={zindexUp}>
                  <Link to="/" className="navbar-itemm" >
                    <button className="button">Home</button>
                  </Link>
                  <button className="button is-pulled-right" onClick={this.toggleOffCanvasMenu}>Menu</button>
                </div>

                {
                  this.props.title
                  ? 
                  <div className="category-title">
                    {
                      authorImage.avatar_urls 
                      ?
                      <div className="is-inline-block">
                        <figure className="image is-96x96 image-objectfit-contain" style={{margin:'0 auto'}}>
                          <img className="is-rounded" width="96" height="96" 
                            src={ authorImage.avatar_urls.wordpress_96 } 
                            alt={ authorImage.name }
                          />
                        </figure>
                        <h2 className="title is-2" dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
                      </div>
                      : 
                      null
                    }
                    
                  </div>
                  : 
                  null
                }
                
                <div className="navbar-start">
                  <CategoryMenu slug={this.props.slug} />
                </div>
                
              </nav>
            )
          }}
          />
      );
    }
}