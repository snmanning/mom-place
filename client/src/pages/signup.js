import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Signup extends Component {
    render() {
        return(
            <div>
                <Header title='Sign Up:' />
                <form>
                    <div><input type='email' placeholder='Email' /></div>
                    <div><input type='password' placeholder='Password' /></div>
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