import React from 'react';

// Component to compile questions
const QuestionList = ({ questions, handleAnswerClick }) => {
    return (
      <div className="question-list">
        {questions.map((question, idx) => {
          return (
            <Question
              key={idx}
              question={questions.question}
              answers={question.answers}
              handleAnswerClick={handleAnswerClick}
            />
          );
        })}
      </div>
    );
  }

    QuestionList.propTypes = {
      questions: PropTypes.array.isRequired,
      handleAnswerClick: PropTypes.func.isRequired
    };

export default QuestionList;