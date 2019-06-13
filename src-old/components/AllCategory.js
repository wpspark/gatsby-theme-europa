import React, { Component } from 'react'
import {Link, graphql} from 'gatsby'

export default class AllCategroy extends Component {
  render() {
    const allCat = this.props.data;
    const active = this.props.active;

    // console.log(active);
    return (
      <div className="all-category uk-box-shadow-small" uk-sticky="">
        
        <nav className="uk-container">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav uk-overflow-auto">
              <li className={ typeof(active) === 'undefined' ? 'uk-active' : ''}> 
                <Link to='/'>
                  <span className="uk-margin-small-right" uk-icon="grid"></span>
                  <span>All</span>
                </Link>
              </li>
              {
                allCat.edges.map( ({node}) => (
                  node.count>0 && 
                  <li key={node.id} className={ active === node.slug ? 'uk-active' : ''}> 
                    <Link to={'categories/' + node.slug}>
                      <span dangerouslySetInnerHTML={{__html:node.name}} />
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

export const AllCategoryQuery = graphql`
  query AllCategoryQuery{
    allWordpressCategory{
      edges{
        node{
          id
          wordpress_id
          slug
          name
          count
        }
      }
    }
  }
`