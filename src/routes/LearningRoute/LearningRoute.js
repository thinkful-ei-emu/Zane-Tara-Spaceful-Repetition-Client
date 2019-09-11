import React, { Component } from 'react'
import Question from '../../components/Question/Question'
import Feedback from '../../components/Feedback/Feedback';
import WordContext from '../../contexts/WordContext';

class LearningRoute extends Component {
  
  contextType = WordContext;

  handleSubmit = () => {
    this.context.answer(this.state.answer)
    .then(res => {
      this.setState({feedback: res})
    });
  }

  render() {
    return (
      <section className="learning-page">
        {(this.context.status!=="feedback") ? <Question handleSubmit={this.handleSubmit}/>
        : <Feedback feedback={this.state.feedback}/> }
      </section>
    );
  }
}

export default LearningRoute;
