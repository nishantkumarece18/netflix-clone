import React, { Component } from 'react';
import './Landing.css';
import Header from './Header';
import Tabs from './Tabs';
import Footer from './Footer';

class Landing extends Component {
	

	render() {
		return (
			<div>
				<Header/>
				<Tabs/>
				<Footer/>
			</div>
		)
	}
}

export default Landing;
