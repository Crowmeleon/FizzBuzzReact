import React, {Component} from 'react';

export default class Input extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onSbmit(e){
        e.preventDefault();
    }

    onInputChange(e){
        this.setState({
            value: e.target.value
        });

        this.props.fizzBuzzCheck(e.target.value);
        
        console.log(e.target.value);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="number" value={this.state.value} onChange={this.onInputChange}/> 
            </form>
        );
    }
}