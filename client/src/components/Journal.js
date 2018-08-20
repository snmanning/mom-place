import React, { Component } from 'react';
import moment from 'moment';

class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: 'Record your thoghts here. Do not forget to click save',
            date: {}
        };

    this.onEntryChange = this.onEntryChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        const today = moment().format('dddd, MMMM Do YYYY, h:mm a');
        this.setState = new Date({today});
    }

    onEntryChange(e) {
        this.setState({value:e.target.value});
    }

    handleSave(e) {
        alert('Your journal entry was saved');
        e.preventDefault();
    }

    render() {
        const today = moment().format('dddd, MMMM Do YYYY, h:mm a');
        return(
            <div>
                <div className='Journal-cover'>
                    <form onSubmit={this.handleSave}>
                        <label></label>
                        <div><input 
                                type='text'
                                value={today}
                                name='date'
                                readOnly='true'/></div>
                        <div><textarea 
                                type='text'
                                value={this.state.entry}
                                onChange={this.OnEntryChange}/></div>
                        <div><button 
                                type='submit'
                                value='Save'
                                onSubmit={this.handleSave}>Save</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Journal;