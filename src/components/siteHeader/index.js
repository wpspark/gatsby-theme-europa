import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
// import Menu from "../siteMenu"
import CategoryMenu from "../category-menu/index"
// import logo from "../../images/wpspark-logo.png"
import Helmet from "react-helmet"

export default class Header extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }
    toggleOffCanvasMenu = () => {
      console.log('I am index page');
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.marginRight = "250px";
    }

    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;
      let catTitle = this.props.title;
      let catData = this.props.data;

      const fullWidth = {
        width:'100%'
      }

      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return <nav className="navbar is-transparent has-shadoww is-spaced is-fixed-topp has-text-centered" role="navigation">
              <Helmet
                link={[
                  {
                    "rel": "icon",
                    "type": "image/png",
                    "href": sparkData.favicon, 
                  }, 
                  {
                    "rel": "stylesheet",
                    "href": 'https://fonts.googleapis.com/css?family=Cardo|Fira+Sans:400,700&display=swap', 
                  }
                ]}
              />
              <div className="navbar-menuu site-info" style={fullWidth}>
                <Link to="/" className="navbar-itemm">
                  {
                    sparkData.logo ? <img src={sparkData.logo} alt="" width="20%" /> :
                      wordpressSiteMetadata.name
                  }
                </Link>
                <p>{wordpressSiteMetadata.description}</p>
                {/* <span className="navbar-burger burger" data-target="MainsiteNav" onClick={this.toggleDropdownMenu}>
                  <span /><span /><span />
                </span> */}
              </div>

              <div className="menu">
                <button className="button" onClick={this.toggleOffCanvasMenu}>Menu</button>
                <div className="navbar-start">
                  <CategoryMenu slug={this.props.slug} />
                </div>
              </div>

              {/* <div id="MainsiteNav" className=""> */}
                {/* <div className="navbar-start">
                  <CategoryMenu slug={this.props.slug} />
                </div> */}

                {/* <div className="navbar-end"> */}
                  {/* <Menu data={this.props.pageContext} /> */}

                  {/* <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a className="button is-primary" href={wordpressSiteMetadata.url} target="_blank" rel="noopener noreferrer">
                          <span>Mainsite</span>
                        </a>
                      </p>
                    </div>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
              
            </nav>
          }}
          />
      );
    }
}