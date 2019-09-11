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

  

  render(){

    {console.log(this.context.word)}
    if(this.state.word!==null){
    return(
    
      <section className='question-container'>
        
        <p>Times Correctly Guessed:{this.props.feedback.wordCorrectCount}</p>
        <p>Times Incorrectly Guess:{this.props.feedback.wordIncorrectCount}</p>
        <p className='DisplayScore'>Your total score is: {this.props.feedback.totalScore}</p>
        <p>Your Guess:{this.props.feedback.answer}</p>
        <p>Answer Correct:{this.props.feedback.isCorrect===true?"True":"False"}</p>
        <button autoFocus onClick={()=>this.props.next()}>Next</button>
        {console.log(this.props.state.feedback)}
        

      </section>
    )}
    else {
      return (<></>)
    }
  }
  

}


export default Feedback;