import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";

class App extends Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <CardList>{monsters}</CardList>
        {/* {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))} */}
      </div>
    );
  }
}

export default App;
