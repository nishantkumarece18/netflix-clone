import React, { Component } from 'react';
import './Header.css';
import Login from './Login';

import history from './history';

class Header extends Component {
    render() {
        return (
            <header className="showcase">
			    <div className="showcase-top">
				    <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
				    <a href="#" className="btn btn-rounded" onClick={()=>history.push('/Login')}>Sign In</a>
			    </div>
			    <div className="showcase-content">
				    <h1>Unlimited movies, TV shows and more.</h1>
				    <h3>Watch anywhere. Cancel Anytime</h3>
					<p>Ready to watch? Enter your email to create or restart your membership.</p>
				    <div>
						<div>
							<label for='email'>Email Address</label>
							<input type="email" id='email' name="email" required></input>
						</div>
						<button type="submit" name="submit">Get Started</button>
					</div>
			    </div>
		    </header>
        )
    }
}

export default Header;
