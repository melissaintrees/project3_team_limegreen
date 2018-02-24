import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import Question from './Question';
import  questions from '../mockdata/gameQuestions';
import axios from 'axios';
import AdvanceBtn from './AdvanceBtn/AdvanceBtn'

// GameApp runs game logic
class GameApp extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            question: "here",
            answer: "testing",
            answerState: 1,
        };
    }

    getAnswer() {
        axios.get('https://mysterious-bastion-34346.herokuapp.com/api/questions/' + this.state.answerState)
        .then((response)=> {
            console.log(response);
          this.setState({
            question: response.data[0].questions,
            answer: response.data[0].answer0,
            answerState: this.state.answerState++
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    render() {
        return (
            <div>
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
                <AdvanceBtn onClick={() => this.getAnswer()} />
            </div>

        );
    };
    
    
// End GameApp    
};

export default GameApp;

// Take component's generated HTML and put it in the DOM
// ReactDOM.render(<GameApp />, document.querySelector('.container'));