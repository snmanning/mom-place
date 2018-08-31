import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    inputChangeHandler(e) {
        const formInput = {...this.state.formInput};
        formInput[e.target.name] = e.target.value;
        this.setState({
            formInput
        });
    }

    formHandler(e) {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('/api/signup', { email, password })
             .then(response => {
                return response;
                });
    }

    render() {
        return(
            <div>
                <Header title='Sign Up:' />
                <form method='post' action='/signup'onSubmit={this.formHandler.bind(this)}>
                    <div><input type='email' placeholder='Email' name='email' onChange={this.inputChangeHandler.bind(this)} required='true'/></div>
                    <div><input type='password' placeholder='Password' name='password' onChange={this.inputChangeHandler.bind(this)} required='true'/></div>
                    <div><button type='submit'>Sign me up!</button></div>
                    <div>
                        <ul>
                            <li>
                                <Link to='/login'>Back to Login</Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;