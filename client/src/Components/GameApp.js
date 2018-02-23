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
            answers: "testing"
        };
    }

    getAnswer() {
        axios.get('https://mysterious-bastion-34346.herokuapp.com/api/questions/1')
        .then(function (response) {
          console.log(response);
          this.setState({

            //   question: response.questions
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    componentDidMount() {
        this.setState({
            question: "Hello World",
            answers: "Nothing"
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
            </div>

        );
    };
    
    
// End GameApp    
};

export default GameApp;

// Take component's generated HTML and put it in the DOM
// ReactDOM.render(<GameApp />, document.querySelector('.container'));