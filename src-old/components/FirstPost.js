import React, { Component } from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const LatestPost = styled.div`
    text-align:center;
    .category{
        margin:35px 0px 50px;
        a{
            color:#929292;
            margin:0px 5px;
            transition:all 0.4s ease;
            font-size:20px;
            &:hover{
                color:#3a3a3a;
                text-decoration:none;
            }
        }
    }
    #firstPostCover img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default class FirstPost extends Component {
    render() {
        
        const data = this.props.data;

        return (
          <LatestPost className="uk-padding" uk-height-viewport="offset-top:70px;offset-bottom:80px;">
            <div className="uk-container uk-container-small">
                <div className="uk-margin">
                    <ul className="uk-iconnav uk-flex-center">
                        {data.categories && data.categories.map(
                                category => <li key={category.id}><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></li>
                            )
                        }
                    </ul>
                </div>
                <Link to={'post/' + data.slug} className="uk-display-block">
                    <h1 className="uk-margin">{data.title}</h1>
                </Link>
                
                <Link to={'post/' + data.slug} className="uk-display-block">
                    <div id="firstPostCover" className="uk-cover-container uk-height-medium">
                        {
                            data.featured_media === undefined ? null :                         
                                <img src={data.featured_media.localFile.childImageSharp.original.src} alt={data.title} uk-img="" className="uk-cover" uk-cover="true"/>
                        }
                    </div>            
                </Link>            
            </div>
          </LatestPost>
        )
    }
}
