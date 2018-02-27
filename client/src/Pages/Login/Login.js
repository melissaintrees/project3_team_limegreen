import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import AppHeader from '../../Components/AppHeader/AppHeader'
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';


class Login extends Component {    
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
				<AppHeader
				/>
                <LoginForm
				/>
                <ContinueBtn
                />
            </div>

        );
    };
};

export default Login;