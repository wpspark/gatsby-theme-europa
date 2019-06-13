import React, { Component } from 'react'
import { Link } from "gatsby"

const NavLink = props => {
  if (!props.test) {
    return <Link className={props.className} to={props.url}>{props.text}</Link>
  } else {
    return <Link to={'/'} className={props.className} disabled="disabled">{props.text}</Link>
  }
}

export default class AllPostPagination extends Component {
    
    createTable = (pageCount) => {
      let children = []
      // Outer loop to create parent
      children.push(<li><Link className="pagination-link" aria-label={'Start'} to={'/'}>Start</Link></li>)
      for (let i = 1; i <= pageCount; i++) {
        if(i > 5) break;
        children.push(<li key={i}><Link className="pagination-link" aria-label={'Goto page' + i} to={'/' + (i > 1 ? 'page/'+i : '')}>{i}</Link></li>)
      }
      children.push(<li><Link className="pagination-link" aria-label={'End'} to={'/page/' + (pageCount)}>End</Link></li>)
      return children
    }

    render() {
      const { index, first, last, pageCount } = this.props;
      const previousUrl = index - 1 === 1 ? '' : 'page/' + (index - 1).toString()
      const nextUrl = 'page/' + (index + 1).toString()

      return (
        <section className="section columns is-centered">
          <nav className="pagination is-half" role="navigation" aria-label="pagination">
            
            <NavLink className="pagination-previous" test={first} url={previousUrl} text="Go to Previous Page" />
            
            <ul className="pagination-list">{this.createTable(pageCount)}</ul>

            <NavLink className="pagination-next" test={last} url={nextUrl} text="Go to Next Page" />

          </nav>
        </section>
      )
    }
}
