import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state= {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :( \nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((friend, i) => {
      if (friend.id === id){
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count +1;
          this.setState({score: this.state.score +1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();                    
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
         <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}            
            image={friend.image}            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;