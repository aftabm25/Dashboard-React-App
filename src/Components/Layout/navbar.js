import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedinlinks'
import SignedOutLinks from './signedoutlinks'
import {connect} from 'react-redux'
const Navbar = (props) => {
    const {auth, profile} = props;
    return(
        <nav className="nav-wrapper">
            <div className="container">
              <Link to='/' className="logo">.Dashboard</Link>
              {auth.uid ? 
              <SignedInLinks profile={profile}/>
              :
              <SignedOutLinks/>}
            </div>
        </nav>
    )
}
const mapStateToProps =(state) => {
    console.log(state);
    return{
        auth : state.firebase.auth ,
        profile :state.firebase.profile
        }
}
export default connect(mapStateToProps)(Navbar)