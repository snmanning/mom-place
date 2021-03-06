import React, { Component } from 'react';
import moment from 'moment';
import Header from './Header';

class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: '',
            date: {}
        };

    this.onEntryChange = this.onEntryChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
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
        const post = {
            entry: this.state.entry,
            date: this.state.entry
        };
        console.log('Saving', post)
        this.afterSubmit(e);
    }

    afterSubmit(e) {
        e.preventDefault();
        e.target.reset();
    }

    render() {
        const today = moment().format('dddd, MMMM Do YYYY, h:mm a');
        return(
            <div>
                <div className='Journal-cover'>
                    <Header title='Digital Journal'/>
                    <form onSubmit={this.handleSave}>
                        <label></label>
                        <div><input 
                                type='text'
                                value={today}
                                name='date'
                                readOnly='true'/></div>
                        <div><textarea 
                                type='text'
                                defaultValue={this.state.entry}
                                onChange={this.OnEntryChange}/></div>
                        <div><button 
                                type='submit'
                                onSubmit={this.handleSave}>Save</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Journal;