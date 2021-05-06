import React, { Component } from 'react';
import './Tabs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

class Tabs extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			disp1:true,
			disp2:false,
			disp3:false
		}
	}

	handleClick1=()=>{
		this.setState({
			disp1:true,
			disp2:false,
			disp3:false
		});
	}
	
	handleClick2=()=>{
		this.setState({
			disp1:false,
			disp2:true,
			disp3:false
		});
	}

	handleClick3=()=>{
		this.setState({
			disp1:false,
			disp2:false,
			disp3:true
		});
	}

    render() {
        return (
			<div>
            	<section className="tabs">
			   		<div className="container">
				    	<div id="tab-1" className={this.state.disp1?'tab-item tab-border':'tab-item'} onClick={this.handleClick1}>
                        	<FontAwesomeIcon icon={faDoorOpen} className='icon' />
					    	<p className="hide-sm">Cancel at any time</p>
				    	</div>
				    	<div id="tab-2" className={this.state.disp2?'tab-item tab-border':'tab-item'} onClick={this.handleClick2}>
                        	<FontAwesomeIcon icon={faTabletAlt } className='icon' />
					    	<p className="hide-sm">Watch anywhere</p>
				    	</div>
				    	<div id="tab-3" className={this.state.disp3?'tab-item tab-border':'tab-item'} onClick={this.handleClick3}>
                        	<FontAwesomeIcon icon={faTags} className='icon' />
					    	<p className="hide-sm">Pick your price</p>
				    	</div>
			    	</div>
		    	</section>
				<section className='tab-content'>
					<div className='container'>
						<Tab1 disp1={this.state.disp1}/>
						<Tab2 disp2={this.state.disp2}/>
						<Tab3 disp3={this.state.disp3}/>
					</div>
				</section>
			</div>
        )
    }
}

export default Tabs;
