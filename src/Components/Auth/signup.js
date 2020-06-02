import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/action/authActions'
class SignUp extends Component {
    state={
        email:'',
        password :'',
        firstName :'',
        lastName :''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value

        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to ='/'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="#1A1A1D">
                    <h5 className="headers">Sign Up</h5>
                    <div className="input-field ">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className='white-text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field ">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className='white-text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className='white-text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className='white-text' onChange={this.handleChange}/>
                    </div>
                    <div>
                    <div className="input-field">
                        <button className="btn pink darken-4">Sign Up</button>
                    <div className="red-text center">
                     {
                        authError? <p>{authError}</p> : null 
                        }
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError : state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)