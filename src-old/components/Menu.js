import React, { Component } from 'react'
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import './rootStyle.scss'

class Menu extends Component {
    
    render() {

        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node['items'];
        const originalDomain = "http://dev.wp"; // get it from config
        return (
          <div className="uk-navbar-container tm-navbar-container">
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
        )
    }
}
export default  Menu;
