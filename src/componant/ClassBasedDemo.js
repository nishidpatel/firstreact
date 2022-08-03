//class based component

import React, { Component} from 'react';

class ClassBasedDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cityname: 'surat'
        }
    }


    changecity = () => {
        this.setState({
            cityname: 'Baroda'
        })
    }



    render() {
        return (
            <div>
                <p>{this.state.cityname}</p>
                <button onClick={() => this.changecity()}>Changecity</button>
            </div>
        );
    }
}


export default ClassBasedDemo;
