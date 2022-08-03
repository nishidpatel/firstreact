//class based component

import React, { Component} from 'react';

class ClassBasedDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cuntryname: 'india'
        }
    }


    changecity = () => {
        this.setState({
            cuntryname: 'uk'
        })
    }



    render() {
        return (
            <div>
                <p>{this.state.cuntryname}</p>
                <button onClick={() => this.changecuntry()}>Changecuntry</button>
            </div>
        );
    }
}


export default ClassBasedDemo;
