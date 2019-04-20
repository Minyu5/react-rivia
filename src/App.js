import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";
import QuestionList from "./components/QuestionList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: null,
      questions: []
    };
  }

  componentDidMount() {
    axios.get("https://opentdb.com/api_category.php").then(res => {
      this.setState({
        categories: res.data.trivia_categories
      });
    });
  }

  getSelected = (event, { value }) => {
    axios
      .get(`https://opentdb.com/api.php?amount=20&category=${value}`)
      .then(res => {
        this.setState({
          selectedCategory: value,
          questions: res.data.results
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Trivia Challenge !</h1>
        <div className="dropdown">
          <Dropdown
            placeholder="Choose your category"
            fluid
            selection
            options={this.state.categories.map(c => ({
              key: c.id,
              value: c.id,
              text: c.name
            }))}
            onChange={this.getSelected}
          />
        </div>
        {this.state.selectedCategory ? (
          <div className="questions">
            <QuestionList questions={this.state.questions} />
          </div>
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}

export default App;
