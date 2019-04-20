import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import QandA from "./QandA";

export class SingleQuestion extends Component {
  state = {
    shown: false
  };

  decodeHTML(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  showModal = () => {
    this.setState({
      shown: true
    });
  };

  hideModal = () => {
    this.setState({
      shown: false
    });
  };

  render() {
    const {
      category,
      difficulty,
      question,
      correct_answer,
      incorrect_answers
    } = this.props.question;
    let decodedQuestion = this.decodeHTML(question);
    let decodedCorrectAnswer = this.decodeHTML(correct_answer);
    let decodedIncorrectAnswers = incorrect_answers.map(i =>
      this.decodeHTML(i)
    );

    return (
      <React.Fragment>
        <div className="question-wrapper" onClick={this.showModal}>
          <div className="question-detail">
            <p>{category}</p>
            <p>{difficulty}</p>
          </div>
          <p className="question-itself">
            <b>{decodedQuestion.substring(0, 100)}</b>
          </p>
        </div>
        <Modal
          show={this.state.shown}
          onHide={this.hideModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <QandA
            question={decodedQuestion}
            correct_answer={decodedCorrectAnswer}
            incorrect_answers={decodedIncorrectAnswers}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default SingleQuestion;
