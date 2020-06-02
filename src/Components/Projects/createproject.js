import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createProject} from '../../store/action/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state={
        title:'',
        content:''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value

        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to ='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="headers">Create New Project</h5>
                    <div className="input-field ">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className='black-text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"> Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                    <div className="input-field">
                        <button className="btn pink darken-4">Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        createProject : (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)