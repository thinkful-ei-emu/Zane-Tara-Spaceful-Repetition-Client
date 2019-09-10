import React, { Component } from 'react'
import Question from '../../components/Question/Question'
import Feedback from '../../components/Feedback/Feedback';

class LearningRoute extends Component {
  render() {
    return (
      <section className="learning-page">
        <Question />
      </section>
    );
  }
}

export default LearningRoute;
