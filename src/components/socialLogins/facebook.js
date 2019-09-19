import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from "semantic-ui-react"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { facebookSignUp } from '../../services/registrationService';

const responseFacebook = (response) => {
//   console.log(response);
  const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/auth/facebook', options).then(r => {
            const token = r.headers.get('x-auth-token');
            console.log("Token", token)
            r.json().then(user => {
                if (token) {
                    // this.setState({isAuthenticated: true, user, token})
                    console.log({isAuthenticated: true, user, token})
                }
            });
        })
}

const componentClicked = (data) => {
    console.log(data)
}

const FacebookLoginButton = () => {
    return <FacebookLogin
    appId="1404945256322140"
    autoLoad={false}
    fields="name,email,picture"
    onClick={componentClicked()}
    callback={responseFacebook} 
    render={renderProps => {
        console.log("renserfasdfa", renderProps)
        return <Button onClick={renderProps.onClick} label={'Facebook Login'} labelPosition={'right'} icon={'facebook'} primary></Button>
    }}
    />
}

export default function() {
    return <FacebookLoginButton></FacebookLoginButton>
}