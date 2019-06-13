import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from "../images/tg-logo.png"

export default class Footer extends Component {
                    //     <div className="f-left uk-width-1-2" >
                    //     <Link to="/">
                    //         <h4>
                    //             Blog Demo
                    //         </h4>
                    //     </Link>
                    // </div>
                    // <div className="f-right uk-width-1-2" >
                    //     Powered By 
                    //     <a href="https://themesgrove.com/">Themesgrove</a>
                    //     {` `}
                    //     © {new Date().getFullYear()}
                    // </div>

  render() {
    return (
        <footer id="footer" className="uk-section uk-section-small uk-background-muted uk-box-shadow-small">
            <div className="footer-wrapper uk-container">
                <div className="footer-wrapper-container">
                    <div className="uk-text-center">
                        <Link to="/">
                          <img className="uk-logo" src={logo} alt="ThemesGrove Logo" width="200" uk-img="" />
                        </Link>
                        <p>
                            This site is powered by <a rel="noopener noreferrer" href="https://wpspark.io" target="_blank">WpSpark</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}


