import React, { Component } from 'react'
import LanguagesService from '../services/lanugages-service';

const WordContext = React.createContext({
  status: null,
  error: null,
  feedback: null,
  word: null,
  input:null,
  setError: () => {},
  clearError: () => {},
  setFeedback: () => {},
  answer: () => {},
  next: () => {},
  setWord: () => {}
})

export default WordContext

export class WordProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      error:  null,
      feedback: null,
      answer:null,
    }
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setFeedback = feedback => {
    this.setState({ feedback })
  }

  setWord = word => {
    this.setState({word})
  }

  answer = guess => {
    console.log('answering!', guess);
    return LanguagesService.guess(guess).then(res => {
      this.setFeedback(res);
      this.setState({status: 'feedback',answer:guess});
      return res;
    });
    
  }

  next = () => {
  }

  render() {

    const value = {
      status: this.state.status,
      error: this.state.error,
      feedback: this.state.feedback,
      setError: this.setError,
      clearError: this.clearError,
      setFeedback: this.setFeedback,
      answer: this.answer,
      next: this.next,
      word: this.state.word,
      setWord: this.setWord,
      input:this.state.answer,
    }
    return (
      <WordContext.Provider value={value}>
        {this.props.children}
      </WordContext.Provider>
    )
  }
}
