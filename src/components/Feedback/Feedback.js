import React from 'react';
import WordContext from '../../contexts/WordContext';
import LanguagesService from '../../services/lanugages-service';



 


class Feedback extends React.Component{

  static contextType=WordContext;

  state = {
    word: null,
    answer: ''
  }

componentDidMount() {
  LanguagesService.getWord().then(res=>{
    this.setState({word: res})
  })
}

  next(){
    this.context.setFeedback(null);
  }


  render(){

    {console.log(this.context.word)}
    if(this.state.word!==null){
    return(
    
      <section className='question-container'>
        {console.log(this.context.word)}
        <p>Current Word:{this.context.word}</p>
        <p>Times Correctly Guessed:{this.props.feedback.wordCorrectCount}</p>
        <p>Times Incorrectly Guess:{this.props.feedback.wordIncorrectCount}</p>
        <p>Total Score:{this.props.feedback.totalScore}</p>
        <p>Your Guess:{this.props.feedback.answer}</p>
        <p>Answer Correct:{this.props.feedback.isCorrect===true?"True":"False"}</p>
        <button autoFocus onClick={this.context.next}>Next</button>
        

      </section>
    )}
    else {
      return (<></>)
    }
  }
  

}


export default Feedback;