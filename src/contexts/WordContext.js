import React, { Component } from 'react';
import LanguagesService from '../services/lanugages-service';

const WordContext = React.createContext({
  status: null,
  error: null,
  word: null,
  input: null,
  setError: () => {},
  clearError: () => {},
  answer: () => {},
  setWord: () => {}
});

export default WordContext;

export class WordProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      error: null,
      answer: null
    };
  }

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setWord = (word) => {
    this.setState({ word });
  };

  answer = (guess) => {
    return LanguagesService.guess(guess).then((res) => {
      this.setState({ status: 'feedback', answer: guess });
      return res;
    });
  };

  next = () => {};

  render() {
    const value = {
      status: this.state.status,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFeedback: this.setFeedback,
      answer: this.answer,
      word: this.state.word,
      setWord: this.setWord,
      input: this.state.answer
    };
    return (
      <WordContext.Provider value={value}>
        {this.props.children}
      </WordContext.Provider>
    );
  }
}
