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
            category: "cssCategory",
            questions: cssCategory.questions,
            userAnswers: [],
            score: 0,
            // answersOptions: [],
            correctAnswer: cssCategory.questions.correctAnswer,
        };
        // this.userSelectionClick = this.userSelectionClick.bind(this);
    };


    // componentDidMount = () => {
    //     const answersOptions = cssCategory.questions.map((questionObject)=>{
    //         const questionFromJSON  = questionObject.question;
    //         // const answersFromJSON = questionObject.answers;
    //         this.setState({
    //             question: questionFromJSON, 
    //             // answerOptions: answersFromJSON
    //         });
    //     });
    // };

    // userSelectionClick(e) {
    //     const userIsCorrect = this.correctAnswer === e.JSON.stingify();
    //     console.log(userIsCorrect);

    //     // if (userIsCorrect &&) {

    //     // }
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
                <h1>
                    {this.state.questions.map((q) => (
                        <Question question={q} />
                    ))}
                </h1>
            </div>
        );
    };

    // End GameApp    
};

export default GameApp;