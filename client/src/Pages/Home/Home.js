export { default } from "./Home";import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
import LoginBtn from '../../Components/LoginBtn/LoginBtn';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';



class Home extends Component {    
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
                <Home
				/>
                <LoginBtn
                />
                <LogoutBtn
                />
            </div>

        );
    };
};

export default Home;