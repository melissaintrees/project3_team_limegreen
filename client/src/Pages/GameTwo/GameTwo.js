import React, { Component } from 'react';
// import axios from 'axios';
// import Input from '../../Components/Input/Input';
import AppHeader from '../../Components/AppHeader/AppHeader';
// import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import { Link } from "react-router-dom";

class GameTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "here",
            answer: "testing",
            answerState: 1,
        };
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">
                        <div className="col-0 col-lg-3"></div>
                        <div className="col-12 col-lg-6 ">
                            <div className="text-center border main-content-div">
                                <AppHeader
                                />
                            </div>
                        </div>
                        <div className="col-0 col-lg-3"></div>
                    </div>

                </div>
            </div>

        );
    };
};

export default GameTwo;