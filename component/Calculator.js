import React from 'react';
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends React.Component{
    state = {
        temparature: "",
    }
    onChnageHandler = (e) => {
        this.setState({
            temparature: e.target.value,
        })
    }
    render() {
        const {temparature} = this.state;
        return (
             <div>
                 <fieldset>
                     <legend>Input Celsius</legend>
                     <input type="text" value={temparature} onChange={this.onChnageHandler}/>
                 </fieldset>
                <BoilingVerdict celsius = {temparature}/>
             </div>
        );
    }
}