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
    console.log(this.props.feedback)

    {console.log(this.context.word)}
    if(this.state.word!==null){
    return(
    
      <section className='question-container'>
        
        {this.props.feedback.isCorrect===false?<section><div className='DisplayScore'>
        <p className=''>Your total score is: {this.props.feedback.totalScore}</p>
        <h2>Good try, but not quite right :(</h2></div>
          <div className='DisplayFeedback'>
            <p>The correct translation for {this.context.word.nextWord} was {this.props.feedback.answer} and you chose {this.context.input}!</p></div>
            <button autoFocus onClick={()=>this.props.next()}>Try another word!</button>
        </section>:
        <section><div className='DisplayScore'>
        <p className=''>Your total score is: {this.props.feedback.totalScore}</p>
        <h2>You were correct! :D</h2></div><div className='DisplayFeedback'>
        <p>The correct translation for {this.context.word.nextWord} was {this.props.feedback.answer} and you chose {this.context.input}!</p></div>
        <button autoFocus onClick={()=>this.props.next()}>Try another word!</button>
        </section>}
        
       
        
       
        
        

      </section>
    )}
    else {
      return (<></>)
    }
  }
  

}


export default Feedback;