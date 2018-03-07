import React from 'react';
import Question from './Question';

const Game = ({ props,  userSelectionClick }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="lesson">
          <h2>Watch This!</h2>
          <div className="lessonvideo">{lessonvideo}</div>
        </div>
        <h1>What do you know about CSS?</h1>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>
      <div className="correct-modal">
        <div className="praise">Correct!</div>
        <div className="bonus"></div>
      </div>
      <div className="questions">
      {questions.map(question => {
        <Question
        />
      })};
      </div>
    </div>
  );
}

export default Game;
