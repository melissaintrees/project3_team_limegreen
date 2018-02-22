import React, { Component } from 'react';
import gameQuestions from './mockdata/gameQuestions';
import gameApp from './components/GameApp';


class App extends Component {
  constructor(props) {
    super(props);
  
    renderGame() {
      return (
        <Game
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={gameQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      );
    }
  
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <h2>Code Aquarium</h2>
          </div>
          {this.state.result ? this.renderResult() : this.renderGame()}
        </div>
      );
    }
  
  }
  
  export default App;
