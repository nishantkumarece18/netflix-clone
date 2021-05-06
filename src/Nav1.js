import React, { Component } from 'react'
import './Nav1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {MenuItems} from './MenuItems'
import history from './history'
import Logout from './Logout';

class Nav1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             clicked:false,
             navbar:'nav-bar'
        }
    }

    handleClick=()=>{
        this.setState({
            clicked:!this.state.clicked
        });
    }

    handleScroll=(event)=>{
        if(window.scrollY>20){
            this.setState({
                navbar:'nav-bar sticky'
            })
        }
        else{
            this.setState({
                navbar:'nav-bar'
            })
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    render() {
        return (
            <nav className={this.state.navbar}>
                <div className='nav-items sticky'>
                    <img
                        className='nav-logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                        alt='Netflix Logo'
                    />      
                    <div className='menu-icon' onClick={this.handleClick}>
                        <FontAwesomeIcon icon={this.state.clicked?faTimes:faBars}/>
                    </div>
                    <ul className={this.state.clicked?'menu active':'menu'}>
                        {MenuItems.map((item,index)=>{
                            return(
                                <li><a href={item.url} className={item.cName} onClick={this.handleClick}>{item.title}</a></li>
                            )
                        })}
                    </ul>
                    <button className='logout' onClick={()=>history.push('/Logout')}>Logout</button>
                    <img
                        className='nav-avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                        alt='Netflix Logo'
                    />
                </div>
            </nav>
        )
    }
}

export default Nav1
