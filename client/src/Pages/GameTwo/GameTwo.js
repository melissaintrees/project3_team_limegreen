import React, { Component } from 'react';
// import axios from 'axios';
// import Input from '../../Components/Input/Input';
import AppHeader from '../../Components/AppHeader/AppHeader';
import QuestionsTwo from '../../Components/QuestionsTwo/QuestionsTwo';
import VideoComp from '../../Components/VideoComp/VideoComp';
import cssCategory from '../../mockdata/questions'
// import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

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
        alert(cssCategory.questions[0].question);
        return (
            <div>
                <div className="container">

                    <div className="row">

                        <div className="col-0 col-lg-3"></div>
                        <div className="col-12 col-lg-6 ">
                            <AppHeader
                            />
                            <div className="text-center border categ-content-div">
                                <h5>Watch video then answer questions to win points!</h5>
                            <div className="sign-up-bg">
                                
                                <div className="embed-responsive embed-responsive-item embed-responsive-4by3">
                                    <VideoComp video_url={cssCategory.lessonVideo}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-lg-3"></div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-0 col-lg-3"></div>
                    <div className="col-12 col-lg-6">
                        <QuestionsTwo
                        />
                    </div>
                    <div className="col-0 col-lg-3"></div>
                </div>
</div>
            </div>

        );
    };
};

export default GameTwo;