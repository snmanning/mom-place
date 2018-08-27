import React, { Component } from 'react';
import Header from '../components/Header';

class Signup extends Component {
    render() {
        return(
            <div>
                <Header title='Sign Up:' />
                <form>
                    <div><input type='email' placeholder='Email' /></div>
                    <div><input type='password' placeholder='Password' /></div>
                    <div><button type='submit'>Sign me up!</button></div>
                </form>
            </div>
        );
    }
}

export default Signup;