import React, { Component } from 'react';
import moment from 'moment';

class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: {},
        }
    };

//automatic populating of an uneditable date field
displayDate() {
    
}

    render() {
        const today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        return(
            <div>
                <div className='Journal-cover'>
                    <form>
                        <label></label>
                        <div><input type='text'/></div>
                        <div><button type='submit'>Save</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Journal;