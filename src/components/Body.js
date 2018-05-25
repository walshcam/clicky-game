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
        console.log(`Click Event: ${this.state.id}`);
        shuffle.shuffle(players)
        this.setState({
            id: "",
            players: players
        });
    };

    // getCardValue = (id) => {
    //     console.log(`ID: ${id}`);
    //     this.chosenCards.push(id);
    //     console.log(this.chosenCards);
    // }

    choosePicture = id => {
        console.log(`ID: ${id}`);
        this.chosenCards.push(id);
    }


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
                                    name = "id"
                                    value = {this.state.id}
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