import React, { Component } from 'react';

//Import of Main Components
import TopBar from "./components/Nav.js"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import PlayerCard from "./components/PlayerCard"
import players from "./players.json";
import shuffle from "./utils/shuffle.js";



class App extends Component {

   //This sets the state of the players
   state = {
    count: 0,
    maxCount: 0,
    chosenCards: players,
    players
};

//Reshuffles the cards after mouse click
reshuffleCards = event => {
    shuffle.shuffle(players)

    //Ternary to have max count increase or not
    this.setState({
      players: players
    })
    console.log(`COUNT: ${this.state.count}`)
};

// getCardValue = (id) => {
//     console.log(`ID: ${id}`);
//     this.chosenCards.push(id);
//     console.log(this.chosenCards);
// }

  choosePicture = id => {
    const originalChosenCardsLength = this.state.chosenCards.length;
    const chosenCards = this.state.chosenCards.filter(chosen => chosen.id !== id);
    if (originalChosenCardsLength - chosenCards.length === 0) {
      this.setState({
        count: 0,
        chosenCards: players
      })
    }
    else{
      if (this.state.count < this.state.maxCount) {
        this.setState({
            count: this.state.count +1,
            chosenCards
        })
      }
      else {
        this.setState({
          count: this.state.count +1,
          maxCount: this.state.maxCount +1,
          chosenCards
        })
      }
    }
    this.reshuffleCards();
  }


//Render the body with card pictures
render() {
    return(

    <div className = "has-navbar-fixed-top">
      <TopBar 
        count = {this.state.count}
        maxCount = {this.state.maxCount}
      />
      <Header />
      <Body>
        {this.state.players.map(player => (
          <PlayerCard
              id = {player.id}
              key = {player.id}
              image = {player.image}
              choosePicture = {this.choosePicture} 
          />
        ))}
      </Body>
      <Footer />
    </div>
    )
  }
}
export default App;