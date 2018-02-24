import React, { Component } from 'react';
import Answer from '../../Components/Game/Answer';
import Question from '../../Components/Game/Question';
// import  questions from './../mockdata/gameQuestions';
import axios from 'axios';
import AdvanceBtn from '../../Components/AdvanceBtn/AdvanceBtn'

// GameApp runs game logic
class GameApp extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            question: "here",
            answer: "testing"
        };
    }

    getAnswer() {
        axios.get('https://mysterious-bastion-34346.herokuapp.com/api/questions/1')
        .then((response)=> {
          console.log(response.data[0].questions);
          console.log(response.data[0].answer0);
          this.setState({
          question: response.data[0].questions,
          answer: response.data[0].answer0
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    render() {
        return (
            <div>
                <AdvanceBtn onClick={() => this.getAnswer()} />
                <h1>
                <Question 
                 value={this.state.question}
                />
                </h1>
                <h2>
                <Answer
                value={this.state.answer}
                />
                </h2>
            </div>

        );
    };

// End GameApp    
};

export default GameApp;
