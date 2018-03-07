import React, { Component } from 'react';
import { cssCategory } from '../../mockdata/questions';
import AppHeader from '../../Components/AppHeader/AppHeader';
import Question from '../../Components/Question/Question';
import SubmitBtn from '../../Components/SubmitBtn/SubmitBtn';
import VideoComp from '../../Components/VideoComp/VideoComp';
// import Results form '../../Components/Results/Results';
import axios from 'axios';
// import AdvanceBtn from '../../Components/AdvanceBtn/AdvanceBtn';

// GameApp runs game logic
class GameApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: [],
            questions: [],
            userAnswers: [],
            score: 0,
        };
        // this.userSelectionClick = this.userSelectionClick.bind(this);
    };


    componentDidMount = () => {
        this.setState({
            questions: cssCategory.questions
        })
    };

    userSelectionClick(event) {
        // // const {questions, userAnswers} = this.state;
        // // if (event.target.value === this.cssCategory.questions.correctAnswer) {
        // //     console.log("add one")
        // // }
        // this.setState
        console.log(event.target.value)
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
        }
        // else {
        //     alert("User is not in database")
        // }
    // };

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

    render() {

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
                            <div class="random">
                            { this.state.questions.map( (q, index) => ( 
                                    <Question 
                                        question={q}
                                        questionIndex={index + 1}
                                        userSelectionClick={this.userSelectionClick}
                                    />
                            ))};
                                </div>
                                <SubmitBtn
                                />
                            </div>
                    </div>

                    <div className="col-0 col-lg-3"></div>
                
                </div>
            
            </div>
            </div>

        );
    };

    // End GameApp    
};

export default GameApp;

