import React, { Component } from 'react';
import { cssCategory } from '../../mockdata/questions';
import Question from '../../Components/Question/Question';
// import Results form '../../Components/Results/Results';
// import axios from 'axios';
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
        const {questions, userAnswers} = this.state;
        if (event.target.value === this.cssCategory.questions.correctAnswer) {
            console.log("add one")
        }
        this.setState
        console.log(event.target.value)
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

    render() {
        return (
            <div>
                <h1>
                    { this.state.questions.map( (q, index) => ( 
                        <Question 
                        question={q}
                        questionIndex={index + 1}
                        userSelectionClick={this.userSelectionClick}
                        />
                    ))}
                </h1>
            </div>
        );
    };

    // End GameApp    
};

export default GameApp;