import React from 'react';

// Map function below goes loops over each video
const Question = ({ cssCategory }) => {
  return (
    <div className="question">
      <video>
        <source src={lessonVideo} />
      </video>
    <ol className="question">
      <h2 className="question-title">
        {questions.question}
      </h2>
      <ol className="question-answers">
        {answers.map((answer, index) => {
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
            />
          );
        })}
      </ol>
    </ol>
  );
}

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;





// const Question = (props) => {
//   const questions = props.videos.map((video) => {
//       return <VideoListItem key={video.etag} video={video} />
//   });
//   return (
//       <ul className='col-md-4 list-group'>
//           {question}
//       </ul >
//   );
// };

// export default Question;