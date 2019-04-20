import React, { Component } from "react";
import SingleQuestion from "./SingleQuestion";

export class QuestionList extends Component {
  render() {
    let qArray = this.props.questions;
    return this.props.questions.map(q => (
      <SingleQuestion key={qArray.indexOf(q)} question={q} />
    ));
  }
}

export default QuestionList;
