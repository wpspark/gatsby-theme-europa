import React, { Component } from 'react'

export default class PageTitle extends Component {
    
    render() {
      let title = this.props.title;
      let subtitle = this.props.subtitle;

      return (
        <section className="hero">
          <div className="hero-body" style={{
            paddingBottom: '0px'
          }}>
            {
              title ? <h3 className="title is-4" dangerouslySetInnerHTML={{__html:title}} /> : null
            }
            {
              subtitle ? <p className="subtitle is-6" dangerouslySetInnerHTML={{__html:subtitle}} /> : null
            }
          </div>
        </section>
      )
    }
}