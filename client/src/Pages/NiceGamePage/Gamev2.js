import React, { Component } from 'react';
import AppHeader from '../../Components/AppHeader/AppHeader';
import NiceVideoComponent from '../../Components/NiceVideoComponent/NiceVideoComponent';

class NiceGame extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <AppHeader
                />
                <div className="text-center border categ-content-div">
                    <h5>Pick a super fun category!</h5>
                </div>
            </div>
        );
    }


}

export default NiceGame;