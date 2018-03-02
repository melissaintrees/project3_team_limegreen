import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import HomePage from '../../Components/HomePage/HomePage';
import LoginBtn from '../../Components/LoginBtn/LoginBtn';
import SignupBtn from '../../Components/SignupBtn/SignupBtn';



class AppHome extends Component {    
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
                            <Header
                            />
                            <div className="text-center border main-content-div">
                                <HomePage
                                />
                                <SignupBtn
                                />
                                <LoginBtn
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

export default AppHome;