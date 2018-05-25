import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
import players from "./../players.json";
import shuffle from "./utils/shuffle.js";

class Body extends Component {
    //This sets the state of the players
    state = {
        players
    };

    chosenCards = [];

    //Reshuffles the cards after mouse click
    reshuffleCards = event => {
        // this.getCardValue(id)
        console.log(`Click Event: ${event}`);
        shuffle.shuffle(players)
        this.setState({players: players});
    };

    // getCardValue = (id) => {
    //     console.log(`ID: ${id}`);
    //     this.chosenCards.push(id);
    //     console.log(this.chosenCards);
    // }

    // clickEvent = (event, id) => {
    //     this.reshuffleCards;
    //     this.getCardValue(id);
    // }


    //Render the body with card pictures
    render() {
        return(
            <section className = "section">
                <div className = "container"> 
                    <div className = "columns is-multiline">   
                        {this.state.players.map(player => (
                                <PlayerCard
                                    id = {player.id}
                                    key = {player.id}
                                    image = {player.image}
                                    onClick = {this.reshuffleCards}   
                                />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}


export default Body;