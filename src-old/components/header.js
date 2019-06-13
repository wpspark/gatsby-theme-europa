// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
// import logo from "../images/tg-logo.png"

const HeaderWrapper = styled.div`
  background:#ffffff;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  z-index: 99;
  
`
const OrderButton = styled.div`
  a{
    transition:all 0.3s ease;
  }
`

export default class Header extends Component {
    state = { ready: false };
    
    componentDidMount() {
      if (typeof window !== 'undefined') {
        const uikit = require('uikit');
        const icons = require('uikit/dist/js/uikit-icons.min');
        uikit.use(icons);
        this.setState({ ready: true });
      }
    }
    render() {
        let meta = this.props.meta;
        console.log(meta);

        let siteTitle = meta.name;
        let siteDescription = meta.description;
        const originalDomain = meta.url; // get it from config
        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node['items'];
        return (

          this.state.ready ? 
            <header>
              <HeaderWrapper>
                <div className="header-container uk-container">
                    <div className="uk-grid uk-flex uk-flex-middle">
                      <div className="uk-width-expand@m uk-flex uk-flex-left uk-flex-middle">
                        <Link to="/" className="uk-logo" alt={siteDescription}>
                          {siteTitle}
                          {/*<img className="uk-logo" src={logo} width="200" uk-img="" alt={siteTitle} />*/}
                        </Link>
                      </div>
                      <div>
                        <div className="uk-navbar-container tm-navbar-container uk-navbar-transparent">
                          <nav className="uk-container" uk-navbar="true">
                              <div className="uk-navbar-left">

                                  <ul className="uk-navbar-nav">
                                      {
                                          data.map( (node, index) => (
                                              <li key={index} className="uk-active">
                                                  <Link to={node.url.replace(originalDomain, "")}>
                                                      {node.title}
                                                  </Link>
                                              </li>
                                          ) )
                                      }                    
                                  </ul>

                              </div>
                          </nav>
                        </div>
                      </div>
                      
                      <OrderButton className="uk-padding-small">
                        <a className="uk-button uk-button-default uk-border-rounded" href={originalDomain} target="_blank" rel="noopener noreferrer">
                          <span className="uk-margin-small-right" uk-icon="reply"></span>
                        </a>
                      </OrderButton>
                    </div>
                </div>
              </HeaderWrapper>
            </header>
          : 
          null
        )
    }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
