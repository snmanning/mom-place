import React, { Component } from 'react';
import moment from 'moment';

class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: "",
            date: new Date(),
        }
    };

//automatic populating of an uneditable date field

    render() {
        return(
            <div>
                <div className='Journal-cover'>
                    <form>
                        <div>The date will be here</div>
                        <div><input type='text'/></div>
                        <div><button type='submit'>Save</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Journal;