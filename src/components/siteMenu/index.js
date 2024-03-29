import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

// export default class Menu extends Component {
//   render() {
//     return <div>Fake</div>
//   }
// }
export default class Menu extends Component {
    state = { ready: false };
    
    render() {

      return (
        <StaticQuery
          query={graphql`
          query SiteMenu {
            wordpressSiteMetadata{
              name
              description
              url
              home
            }
          }
        `}
          render={data => (
            <div className="navbar-item is-hoverable">
              {
                data.allWordpressWpApiMenusMenusItems.edges[0].node['items'].map((item, index) => (
                  <Link key={index} className="navbar-item"
                    to={item.url === '#' ? '/' : '/' + item.url.replace(data.wordpressSiteMetadata.url, "")}
                  >
                    {item.title}
                  </Link>
                ))
              }
            </div>
          )}
        />
      )
    }
}