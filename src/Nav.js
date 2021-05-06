// import React,{useEffect,useState} from 'react'
// import './Nav.css';
// import history from './history';
// import Login from './Login';

// function Nav() {

//     const [show,handleShow]=useState(false);

//     useEffect(()=>{
//         window.addEventListener('scroll',()=>{
//             if(window.scrollY >20){
//                 handleShow(true);
//             }else handleShow(false);
//         });
//         return ()=>{
//             window.removeEventListener('scroll');
//         };
//     },[]);

//     return (
//         <nav className={`nav ${show && "nav-black"}`}>
//             <img
//                 className='nav-logo'
//                 src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
//                 alt='Netflix Logo'
//             />
//             <button className='signin' onClick={()=>history.push('/Login')}>Sign In</button>
//             <img
//                 className='nav-avatar'
//                 src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
//                 alt='Netflix Logo'
//             />
//         </nav>
//     )
// }

// export default Nav


import React, { Component } from 'react'
import './Nav.css'
import history from './history';
import Login from './Login';

class Nav extends Component {

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
                    <button className='signin' onClick={()=>history.push('/Login')}>Sign In</button>
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

export default Nav
