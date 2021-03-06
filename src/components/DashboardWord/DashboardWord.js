import React from 'react';
import './DashboardWord.css';

class DashboardWord extends React.Component {
  //loop through list of words to generate word elements
  renderWordList = () => {
    const wordList = this.props.words.map((word, index) => {
      return (
        <li key={index} className="dashword">
          <h4>{word.original}</h4>
          <p>
            correct answer count:{' '}
            <span className="correct">{word.correct_count}</span>
          </p>
          <p>
            incorrect answer count:{' '}
            <span className="incorrect">{word.incorrect_count}</span>
          </p>
        </li>
      );
    });
    return wordList;
  };
  render() {
    return (
      <div className="word-list-area">
        <ul className="wordlist">{this.renderWordList()}</ul>
      </div>
    );
  }
}

export default DashboardWord;
