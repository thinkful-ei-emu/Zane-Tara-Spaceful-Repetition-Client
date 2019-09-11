import React, { Component } from 'react'
import Question from '../../components/Question/Question'
import Feedback from '../../components/Feedback/Feedback';
import WordContext from '../../contexts/WordContext';

class LearningRoute extends Component {
  constructor(props) {
    super(props);
    this.state= {
      feedback: null
    }
  }
  
  static contextType = WordContext;

  handleSubmit = (answer) => {
    this.context.answer(answer)
    .then(res => {
      this.setState({feedback: res})
    });
  }
  next=()=>{
    this.setState({feedback:null});
  }

  render() {
    console.log(this.state.feedback)
    if(this.state.feedback===null)
    return (
      <section className="learning-page">
          <Question handleSubmit={this.handleSubmit}/>
      </section>
    );
    if(this.state.feedback.wordCorrectCount!==null){
      return(
        <section className="learning-page">
          <Feedback feedback={this.state.feedback} next={this.next} state={this.state}/>
        </section>
      )
    }
    else{
      return(
        <></>
      )
    }
  }
}

export default LearningRoute;
