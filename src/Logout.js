import React, { Component } from 'react';
import Footer from './Footer';
import history from './history';
import Landing from './Landing';
import './Logout.css';
import Nav from './Nav';

export class Logout extends Component {
    render() {
        return (
            <div className='log-out-container'>
                <Nav/>
                <div className='logout-page showcase'>
                    <div className='logout-page-items'>
                        <h1>Leaving So Soon?</h1>
                        <p className='text-1'>
                            Just so you know, you don’t always 
                            need to sign out of Netflix. It’s only 
                            necessary if you’re on a shared or 
                            public computer.
                        </p>
                        <p className='text-2'>
                            You’ll be redirected to the Netflix home
                            page by clicking on the button below.
                        </p>
                        <button onClick={()=>history.push('/')}>Go Now</button>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Logout
