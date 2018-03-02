import React, { Component } from 'react';
import Answer from '../../Components/Answer/Answer';
// import Question from '../Components/Game/Question';
import cssCategory from '../../mockdata/questions';
// console.log(cssCategory);
import axios from 'axios';
import AdvanceBtn from '../../Components/AdvanceBtn/AdvanceBtn'

// GameApp runs game logic
class GameApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answers: [],
        };
    }

    componentDidMount = () => {
        const answersArray = cssCategory.questions.map((questionObject)=>{
            return questionObject.answers;
            })
        const questionFromJSON  = cssCategory.questions.question;
        const answersFromJSON = cssCategory.questions.answers;
        this.setState({question: questionFromJSON, answers: answersArray})
            // .then((response) => {
            //     console.log(response);
            //     this.setState({
            //         question: response.data[0].questions,
            //         answer: response.data[0].answer0,
            //         answerState: this.state.answerState++
            //     });
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
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
                    {/* <Question value={this.state.question} /> */}
                </h1>
                <h2>
                    <Answer value={this.state.answers} />
                </h2>
                    {/* <AdvanceBtn onClick={()=> this.getAnswer()} /> */}
            </div>
        );
    };

// End GameApp    
};

export default GameApp;
