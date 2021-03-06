import React, { Component } from 'react';
import AppHeader from '../../Components/AppHeader/AppHeader';
import PlayAgnBtn from '../../Components/PlayAgnBtn/PlayAgnBtn';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';
import ScoreComp from '../../Components/ScoreComp/ScoreComp';
import { score } from '../Game/GameApp';
import allUsersScores from '../../mockdata/userstats';


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
            <div className="container">
                <div className="row">

                    <div className="col-0 col-lg-3"></div>
                    <div className="col-12 col-lg-6 ">
                        <AppHeader />
                        <div className="text-center border signup-content-div">
                            <div className="score-bg">
                                <h5>Congrats! You have earned points!</h5>
                                <h5>Your all time score is: {this.state.score}</h5>
                                <ScoreComp 
                                />
                                <PlayAgnBtn 
                                />
                            </div>
                            <LogoutBtn 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    };
};

export default Score;