import React from 'react';
import WordContext from '../../contexts/WordContext';
import LanguagesService from '../../services/lanugages-service';
import Button from '../Button/Button';

class Feedback extends React.Component {
  static contextType = WordContext;

  state = {
    word: null,
    answer: ''
  };

  componentDidMount() {
    LanguagesService.getWord().then((res) => {
      this.setState({ word: res });
    });
  }

  render() {
    if (this.state.word !== null) {
      return (
        <div className="question-container">
          <div className="DisplayScore">
            <p className="">
              Your total score is: {this.props.feedback.totalScore}
            </p>
            {/*Display feedback based on their response */}
            {this.props.feedback.isCorrect === false ? (
              <h2>Good try, but not quite right :(</h2>
            ) : (
              <h2>You were correct! :D</h2>
            )}
          </div>
          <div className="DisplayFeedback">
            <p>
              The correct translation for{' '}
              <span lang="es">{this.context.word.nextWord}</span> was{' '}
              {this.props.feedback.answer} and you chose {this.context.input}!
            </p>
          </div>
          <Button autoFocus onClick={() => this.props.next()}>
            Try another word!
          </Button>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default Feedback;
