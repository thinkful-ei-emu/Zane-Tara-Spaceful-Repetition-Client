import React from 'react';
import Button from '../Button/Button';
import './Question.css';
import LanguagesService from '../../services/lanugages-service';
import WordContext from '../../contexts/WordContext';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null,
      answer: ''
    };
  }

  static contextType = WordContext;

  componentDidMount() {
    //get word to display
    LanguagesService.getWord().then((res) => {
      this.context.setWord(res);
      this.setState({
        word: res,
        language: { totalScore: res.totalScore }
      });
    });
  }

  //sends answer submission to parent element
  handleSub = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.answer);
  };

  //handles user input for controlled form
  handleChange = (e) => {
    this.setState({
      answer: e.target.value
    });
  };

  render() {
    if (this.state.word) {
      return (
        <div className="question-container">
          <h2>Translate the word:</h2>
          <span className="nextword" lang="es">
            {this.state.word.nextWord}
          </span>
          <p>Your total score is: {this.state.language.totalScore}</p>
          <form onSubmit={this.handleSub}>
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
            </label>
            <input
              autoFocus
              onChange={this.handleChange}
              type="text"
              name="learn-guess-input"
              id="learn-guess-input"
              required
              value={this.state.answer}
            />
            <Button type="submit">Submit your answer</Button>
          </form>
          <p>
            You have answered this word correctly{' '}
            {this.state.word.wordCorrectCount} times.
          </p>
          <p>
            You have answered this word incorrectly{' '}
            {this.state.word.wordIncorrectCount} times.
          </p>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default Question;
