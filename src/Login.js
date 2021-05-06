import React, { Component } from 'react'
import './Login.css';
import Landing from './Landing';
import Main from './Main';

import history from './history';
import Footer from './Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

class Login extends Component {
    render() {
        return (
        <div>
            <div className='sign-in showcase'>
                <div className='login-items'>
                    <h1>Sign in</h1>
                    <div className='input'>
                        <label for='account'>Email or Phone No.</label>
                        <input type="text" id='account' name="email"  required></input>
                    </div>
                    <div className='input'>
                        <label for='pass'>Password</label>
                        <input type="password" id='pass' name="pass" required></input>
                    </div>
                    <button type='submit' className='submit' onClick={()=>history.push('/Main')}>Sign In</button>
                    <div className='check-box'>
                        <div>
                            <input type="checkbox" id="via-email" name="contact1" value="contact"></input>
				            <label for='via-email'>Remember me</label>
                        </div>
                        <a href=''>Need help?</a>
                    </div>
                    <div className='login-facebook'>
                        <FontAwesomeIcon icon={faFacebookF} className='icon' />
                        <a href=''>Login with Facebook</a>
                    </div>
                    <div className='sign-up-now'>
                        New to Netflix? <a href='' onClick={()=>history.push('/')}>Sign up now</a>
                    </div>
                    <div className='learn-more'>
                        <span>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        </span>
                        <a href='#'>Learn more.</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Login;
