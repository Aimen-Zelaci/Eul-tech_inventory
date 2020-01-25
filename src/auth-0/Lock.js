import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './config/auth-0.env';

class Lock extends Component {
    lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
        auth: {
            responseType: 'token id_token',
            sso: false,
        },
        languageDictionary : {
            title: "LAU TECH"
        },
        container: AUTH_CONFIG.container,
        theme: {
            primaryColor: '#3a99d8',
            logo:'https://previews.dropbox.com/p/thumb/AAoC_v-y5BXt8VfRKUHQy22cRuuxOzadJjuA1Qf8n4Yptpu22T2o6fD8ZNLGOW8ZAHSlPkCB9EsvWazTOJtZmGP0xdG1xIrGUCowY1sSbmN5Xe1Zge0dsd_Wt2nTZIV3JahZtVDzAaJrMkK-K0Um1knsqz5KnhnzgPw8J8kUkSiUtsSi16xXi42PVz7DQ9cxnj1-C4wVVFoldaeviZi2T1ag5UPYaYyo7_hKxL5hNtOnB0OAoDCJ1nBwdWDBKW41LzUVZ9GLN1hvi-tQqF6euwqBkzJyw9z7RwKYtYRdwRRMww9YE2unbM9wst58ENwvol9Fo7doamHlhNcCqAmx1suj6upkT1ZJDNX6OqnYVvKXKb9ATgrV5g03kiDRjnYQ8GeI1lpfgt07sfysPa3wrT5t/p.png?fv_content=true&size_mode=1'

        },
        allowSignUp: false,

    });

    constructor(props) {
        super(props);
        this.state = { loggedIn : false };
        this.onAuthenticated = this.onAuthenticated.bind(this);

        this.onAuthenticated();
    }

    onAuthenticated() {
        this.lock.on('authenticated', (authResult) => {
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);

            this.setState({ loggedIn: true });
        });
    }

    componentDidMount() {
        // Avoid showing Lock when hash is parsed.
        if ( !(/access_token|id_token|error/.test(this.props.location.hash)) ) {
            this.lock.show();
        }
    }

    render() {
        const style = { marginTop: '32px',fontFamily:'Verdana' }

        return(
            !this.state.loggedIn ? (
                <div>
                    <div id={AUTH_CONFIG.container} style={style}></div>
                </div>
            ) : (
                <Redirect to={{
                    pathname: '/home',
                    state: { from: this.props.location }
                }} />
            )
        );
    }
}

export default Lock;
