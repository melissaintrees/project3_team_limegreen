export { default } from "./Home";import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import Home from '../../Components/Home/Home';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';


class Score extends Component {    
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
                <Score
				/>
                <ContinueBtn
                />
                <LogoutBtn
                />
            </div>

        );
    };
};

export default Score;