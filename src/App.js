import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Jumbotron> Clicky Game </Jumbotron>
        <Title>Clicky Game</Title>

        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
