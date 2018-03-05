import React, { Component } from 'react';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';
// import Score from '../../Components/Score/Score';

class ScoreTwoResults extends Component {
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
                <LogoutBtn
                />
            </div>

        );
    };
};

export default ScoreTwoResults;