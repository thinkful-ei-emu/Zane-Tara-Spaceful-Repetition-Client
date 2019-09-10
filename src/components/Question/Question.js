import React from 'react';
import Button from '../Button/Button';
import './Question.css';
import LanguagesService from '../../services/lanugages-service';
import {Redirect} from 'react-router-dom';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null,
      answer: ''
    }
  }
  componentDidMount() {
    LanguagesService.getWord().then(res=>{
      this.setState({word: res})
    })
  }

  handleChange = (e) => {
    this.setState({
      answer: e.target.value
    })
  }
  
  render() {
    if (this.state.word) {
      return (
        <div className="question-container">
          <h2>Translate the word:</h2>
          <span className="nextword">{this.state.word.nextWord}</span>
          <p>Your total score is: {this.state.word.totalScore}</p>
          <form onSubmit={(e) => this.props.handleSubmit()}>
            <label for="learn-guess-input">What's the translation for this word? </label>
            <input onChange={(e)=>this.handleChange()} type="text" name="learn-guess-input" id="learn-guess-input" required value={this.state.answer}/>
            <Button type="submit">Submit your answer</Button>
          </form>
          <p>You have answered this word correctly {this.state.word.wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {this.state.word.wordIncorrectCount} times.</p>
        </div>
        );
    }
    else {
      return <></>
    }
  }
}

export default Question;