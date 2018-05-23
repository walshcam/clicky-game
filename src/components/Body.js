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
            <div className = "container">    
                <div className = "tile is-ancester">
                    {this.state.players.map(player => (
                        <PlayerCard
                            id = {player.id}
                            image = {player.image}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


export default Body;