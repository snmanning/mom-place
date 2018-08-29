import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {},
            isLoading: true,
        };
    }

    componentDidMount() {
        const url = 'https://favqs.com/api/qotd';
        try {
            axios.get(url)
                 .then(response => {
                     this.setState({
                         quote: response.data.quote,
                         isLoading: false
                     });
                 })
        } catch (error) {
            this.setState({
                isLoading: true,
                error
            });
        };
    }

    render() {
        const { isLoading, error, quote } = this.state;
        if(error) {
            return(
                <p>Today's quote is not available at this time. Please check back later</p>
            );
        }
        if(isLoading) {
            return (
                <p>Just a moment as a great quote is being selected...</p>
            );
        }
        return(
            <div>
                <Header title='Think about it...' />
                <div>
                    <p>"{quote.body}"</p>
                    <p>~{quote.author}</p>
                </div>
            </div>
        );
    }
}

export default Quote;