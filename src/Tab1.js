import React, { Component } from 'react'
import './Tab1.css';

class Tab1 extends Component {

    render() {
        return (
            <div>
                <div id="tab-1-content" className={`tab-content-item && ${this.props.disp1?'show':'hide'}`}>
					<div className="tab-1-content-inner">
						<div>
							<p className="text-lg">
								If you decide Netflix isn't for you - no problem. No commitment.
								Cancel online anytime.
							</p>
							<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
						</div>
						<img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
					</div>
				</div>
            </div>
        )
    }
}

export default Tab1;
