import React, { Component } from 'react';
import { cssCategory } from '../../mockdata/questions';
import AppHeader from '../../Components/AppHeader/AppHeader';
import Question from '../../Components/Question/Question';
import SubmitBtn from '../../Components/SubmitBtn/SubmitBtn';
import VideoComp from '../../Components/VideoComp/VideoComp';
import axios from 'axios';
import PlayAgnBtn from '../../Components/PlayAgnBtn/PlayAgnBtn';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';
import ScoreComp from '../../Components/ScoreComp/ScoreComp';

// GameApp runs game logic
class GameApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: [],
            questions: [],
            userAnswers: [],
            score: 0,
            userSubmit: false,
        };
        this.userSelectionClick = this.userSelectionClick.bind(this);
        this.userSubmitGame = this.userSubmitGame.bind(this);
    };


    componentDidMount = () => {
        this.setState({
            questions: cssCategory.questions,
        })
    };


    userSelectionClick = (event) => {
        this.state.questions[event.target.name].userAnswer = event.target.value;
        if (this.state.questions[event.target.name].userAnswer === this.state.questions[event.target.name].correctAnswer) {
                //this.setState.score = (this.state.score ++);
                //console.log(this.state.score);
                console.log("That was the right answer.")
        };
    };

    
    // Function to calculate user scores
    userSubmitGame = (props) => {
        var correctQuestions = this.state.questions.filter((q) => { q.userAnswer === q.correctAnswer });
        console.log(correctQuestions.length);
        var score = 0;
        for (var i = 0; i < this.state.questions.length; i++) {
            console.log([ i, this.state.questions[i] ])
            if (this.state.questions[i].userAnswer === this.state.questions[i].correctAnswer) {
                score++;
            }
        }
        this.setState( { userSubmit: true, score: score });
    };


    sendUserScore() {
        axios.post('/score', {
            score: this.state.score,
            })
            .then(function (response) {
            console.log(response);
            //React Redirect to Scores
            })
            .catch(function (error) {
            console.log(error);
            });
        };

    // getAnswer = () => {
    //     axios.get('https://mysterious-bastion-34346.herokuapp.com/api/questions/' + 2)
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({
    //                 question: response.data[0].questions,
    //                 answer: response.data[0].answer0,
    //                 answerState: this.state.answerState++
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    render_questions() {

        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-0 col-lg-3"></div>
                        <div className="col-12 col-lg-6 ">
                            <AppHeader 
                            />
                                <div className="text-center border quest-content-div">
                                    <h5>Watch video then answer questions to win points!</h5>
                                <VideoComp video_url={cssCategory.lessonVideo} 
                                />
                                <div className="random">
                                { this.state.questions.map( (q, index) => ( 
                                        <Question 
                                            question={q}
                                            questionIndex={index}
                                            userSelectionClick={this.userSelectionClick}
                                        />
                                ))}
                                    </div>
                                    <SubmitBtn userSubmitGame={this.userSubmitGame}
                                    // score={score}
                                    />
                                </div>
                        </div>
                        <div className="col-0 col-lg-3"></div>
                    </div>
                </div>
            </div>
        );
    };

    render_score() {
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

    render() {
        return this.state.userSubmit ? this.render_score() : this.render_questions()
    };
    // End GameApp    
};

export default GameApp;

