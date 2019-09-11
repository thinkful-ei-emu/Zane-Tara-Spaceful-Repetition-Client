import React, { Component } from 'react'
import LanguagesService from '../services/lanugages-service';

const WordContext = React.createContext({
  status: null,
  error: null,
  feedback: null,
  word: null,
  setError: () => {},
  clearError: () => {},
  setFeedback: () => {},
  answer: () => {},
  next: () => {},
  setWord: ()=>{},
})

export default WordContext

export class WordProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      error:  null,
      feedback: null
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
      this.setState({status: 'feedback'});
      return res;
    });
    
  }

  next = () => {
    this.setState({feedback:null})
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
      setWord:this.setWord,
      word:this.word,
    }
    return (
      <WordContext.Provider value={value}>
        {this.props.children}
      </WordContext.Provider>
    )
  }
}
