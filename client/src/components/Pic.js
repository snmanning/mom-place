import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pic extends Component {
    static propTypes = {
        picUrl: PropTypes.string.isRequired
    }

    render() {
        const {picUrl} = this.props;
        return(
            <div>
                <img src={picUrl}
                     alt='Peace and Encouragement' />
            </div>
        );
    }

}

export default Pic;