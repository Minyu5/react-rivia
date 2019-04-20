import React, { Component } from "react";

export class QandA extends Component {
  render() {
    let incorrect_answer_array = this.props.incorrect_answers;
    return (
      <div className="qCard">
        <p className="full-question">
          <b>{this.props.question}</b>
        </p>
        <p className="correct-answer">
          <strong>{this.props.correct_answer}</strong>
        </p>
        {incorrect_answer_array.map(i => (
          <p key={incorrect_answer_array.indexOf(i)}>{i}</p>
        ))}
      </div>
    );
  }
}

export default QandA;
