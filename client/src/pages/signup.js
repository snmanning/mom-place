import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
   state = {
       error: null
   };

    async formHandler(evt) {
        evt.preventDefault();
        const form = evt.target;
        const inputs = Array.from(form.elements)
                            .filter(element => element.tagName ==='INPUT');
        const [ email, password ] = inputs.map(input => input.value);
        try {
            await axios.post('/api/signup', { email, password });
            this.props.history.push('/login');
        } catch (error) {
            this.setState({
                error: 'An account has not been created'
            });
        }
    }

    render() {
        return(
            <div>
                <Header title='Sign Up:' />
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form method='post' action='/signup'onSubmit={this.formHandler.bind(this)}>
                    <div><input type='email' placeholder='Email' name='email' required='true'/></div>
                    <div><input type='password' placeholder='Password' name='password' required='true'/></div>
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