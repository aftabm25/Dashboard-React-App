import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/action/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state={
        email:'',
        password :''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value

        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to ='/' />
    
        return (
            <div className="container width=50%">
                <form onSubmit={this.handleSubmit} className="#1A1A1D" >
                    <h5 className="headers">Sign In</h5>
                    <div className="input-field ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="white-text" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="white-text" onChange={this.handleChange}/>
                    </div>
                    <div>
                    <div className="input-field">
                        <button className="btn pink darken-4">Login</button>
                        <div className="red-text center">
                        {authError? <p> {authError} </p> : null } </div>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
const mapStateToProps = (state) => {
    return{
        authError : state.auth.authError, 
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
