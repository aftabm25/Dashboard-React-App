import React, { Profiler } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/action/authActions'
 const SignedInLinks = (props) => {
    
    return(
       <ul className="right">
           <li><NavLink to='/CreateProject' className='links'>New Post</NavLink></li>
           <li><a className='links' onClick={props.signOut}>Log Out</a></li>
           <li><NavLink to='/' className="btn btn-floating blue-grey darken-4 initials">{props.profile.initials}</NavLink></li>
       </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
            signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)