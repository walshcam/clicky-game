import React, { Component } from "react";
import PlayerCard from "./PlayerCard.js";
import players from "./../players.json";

class Body extends Component {
    //This sets the state of the players
    state = {
        players
    };

    render() {
        return(
            <section class = "section">
                <div className = "container"> 
                    <div className = "columns is-multiline">   
                        {this.state.players.map(player => (
                                <PlayerCard
                                    id = {player.id}
                                    image = {player.image}
                                />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}


export default Body;