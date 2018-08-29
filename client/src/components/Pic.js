import React, { Component } from 'react';
import Header from './Header';

class Pic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picUrl: 'https://picsum.photos/350/350/?random'
        };
    }

    render() {
        const {picUrl} = this.state;
        return(
            <div>
                <Header title='A Picture is Worth a Thousand Words' />
                <img src={picUrl}
                     alt='Peace and Encouragement' />
            </div>
        );
    }

}

export default Pic;