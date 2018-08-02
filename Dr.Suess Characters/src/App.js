import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import oldfriends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    directions: "Read the directions below to play the game...",
    friendClicked: []
  };



  calculateScore = (id) => {
    //Check to see if the ID of the clicked person is already in the array
    if (this.state.friendClicked.indexOf(id) === -1) {
      //If so, add 1 to the score & add the id to the array
      let score = this.state.score + 1;
      let topScore = this.state.topScore;
      //Also check the high score.  If it's less than the score, change it to the score.
      if (topScore < score) {
        topScore = score
      };
      this.setState({
        score: score,
        topScore: topScore,
        directions: "Good Job!",
        //ES6 array magic here. It's essentially a push into the array.
        friendClicked: [id, ...this.state.friendClicked]
      });
    }
    //If not, set the score to 0 and empty the array
    else {
      this.setState({
        score: 0,
        friendClicked: [],
        directions: alert("Wrong - Sad. Go read a book, Kiddo.")
      })
    }
  }



  render() {
    return (
      <div className="container">
    
      
       
        <Navbar 
          item1="Choose the Doctor's Friends"
          score={this.state.score}
          topScore={this.state.topScore}
          directions={this.state.directions}
        />

            <Title><u><b>Friends of the Doctor!</b></u></Title>

        
        <h5>•Click on the Doctor's Friends to Get Points</h5>
        <h5>•Each friend you click on will earn you a point. But, if you click a friend more than once, your score will reset!!</h5>
      
          <Wrapper>


<div className="d-flex flex-wrap justify-content-center col-lg-10 mx-auto carousel">
          {
            oldfriends
            // Sort the array of people randomly
            .sort(() => 0.5 - Math.random())
            // Generate a card for each person in the JSON array
            .map(bookChars => (
              <FriendCard
                key={bookChars.id}
                id={bookChars.id}
                name={bookChars.name}
                image={bookChars.image}
                // Passing in the fx as a prop so that it can be called in the PersonCard
                calculateScore={this.calculateScore}
              />
          ))}
         </div> 
          </Wrapper>
        </div>
       
    );
    
  }

}


export default App;
