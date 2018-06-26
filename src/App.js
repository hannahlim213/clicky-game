import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";

// shuffle array module
let shuffle = require("shuffle-array");


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currScore: 0,
    highestScore: 0
  };

  // let arr = [];

  imgClicked = (id) => {
    let friends = this.state.friends;
    let currScore = this.state.currScore;
    let targetFriend = {};
    friends.forEach((elem) => {
      if (elem.id === id) {
        targetFriend = elem;
      }
    });
    if (targetFriend.clicked === false) {
      targetFriend.clicked = true;
      currScore++;
      shuffle(friends)
      this.setState({ currScore, friends })
    }
    else {
      this.endGame();
    }
  }

  endGame = () => {
    let highestScore = this.state.highestScore;
    let currScore = this.state.currScore;
    let friends = this.state.friends;

    if (currScore < highestScore) {
      highestScore = currScore;
    }
    shuffle(friends)
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let currScore = this.state.currScore;
    let highestScore = this.state.highestScore;
    return (
      <div>
        <Navbar highScoreinNav={currScore}
          currScoreinNav={highestScore} />

        <Wrapper>

          <Title>Clicky Game</Title>

          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              clicked={this.imgClicked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
