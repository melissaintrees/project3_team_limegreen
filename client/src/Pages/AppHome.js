import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import HomePage from '../Components/HomePage/HomePage';
import LoginBtn from '../Components/LoginBtn/LoginBtn';
import SignupBtn from '../Components/SignupBtn/SignupBtn';



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
				<Header
				/>
                <HomePage
				/>
                <SignupBtn
                />
                <LoginBtn
                /> 
            </div>

        );
    };
};

export default AppHome;