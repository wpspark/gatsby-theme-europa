import React, { Component } from 'react'
import styled from 'styled-components'

const SocialMenu = styled.div`
    li{
        margin:0px 5px;
    }
`

export default class Social extends Component {
    render() {
        return (
        <SocialMenu className="social-icons">
            <ul className="uk-flex">
                <li><span uk-icon="facebook"></span></li>
                <li><span uk-icon="twitter"></span></li>
                <li><span uk-icon="instagram"></span></li>
            </ul>
        </SocialMenu>
        )
    }
}
