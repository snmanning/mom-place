import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) =>
    <header className='Header-container'>
        <h2>{props.title}</h2>
    </header>

    Header.propTypes = {
        title: PropTypes.string
    };

    export default Header;