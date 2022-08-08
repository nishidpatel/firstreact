import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time : new Date ()
        }
    }
    
    tick = ()=> {
        this.setState({
            time : new Date()
        })
    }

    componentDidMount =()=>{
        this.time = setInterval(() => this.tick(),1000)
    }

    componentDidUpdate = (prevprops,prevstate)=>{
        if (prevstate.time !== this.state.time){
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount =()=>{
        clearInterval(this.state);
    }




    render() {
        return (
            <div>

                
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;