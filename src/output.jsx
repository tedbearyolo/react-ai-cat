import React, { Component } from "react";

class Output extends Component {
    className = "output hide";

    render(s){
        return (<div id="output" className={this.className}>{s}</div>);
    }
} 

export default Output;
