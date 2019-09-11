import React from 'react';
import WordContext from '../../contexts/WordContext';



 


class Feedback extends React.Component{

  static contextType=WordContext;

  response={
    "nextWord": "test-next-word-from-incorrect-guess",
   "wordCorrectCount": 888,
    "wordIncorrectCount": 111,
    "totalScore": 999,
    "answer": "test-answer-from-incorrect-guess",
    "isCorrect": false
  }

  next(){
    this.context.setFeedback(null);
  }


  render(){
    return(
      <section className='question-container'>
        <p>Current Word:{this.response.nextWord}</p>
        <p>Times Correctly Guessed:{this.response.wordCorrectCount}</p>
        <p>Times Incorrectly Guess:{this.response.wordIncorrectCount}</p>
        <p>Total Score:{this.response.totalScore}</p>
        <p>Your Guess:{this.response.answer}</p>
        <p>Answer Correct:{this.response.isCorrect}</p>
        <button onClick={this.next}>Next</button>

      </section>
    )
  }

}


export default Feedback;