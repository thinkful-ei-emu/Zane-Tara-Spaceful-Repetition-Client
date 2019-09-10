import React, { Component } from 'react'
import LanguagesService from '../services/lanugages-service';

const WordContext = React.createContext({
  status: null,
  error: null,
  feedback: null,
  setError: () => {},
  clearError: () => {},
  setFeedback: () => {},
  answer: () => {},
  next: () => {},
})

export default WordContext

export class WordProvider extends Component {

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

  answer = guess=> {
    LanguagesService.guess().then(res => {
      this.setFeedback(res);
    })
  }

  processLogout = () => {
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }
    return (
      <WordContext.Provider value={value}>
        {this.props.children}
      </WordContext.Provider>
    )
  }
}
