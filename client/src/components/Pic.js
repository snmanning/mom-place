import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Pic extends Component {
    static propTypes = {
        picUrl: PropTypes.string.isRequired
    }

    render() {
        const {picUrl} = this.props;
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