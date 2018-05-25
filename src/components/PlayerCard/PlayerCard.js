import React from "react";
import "./PlayerCard.css"

const PlayerCard = (props) => (

    <div className = "column is-2 is-parent" id = {props.id} onClick = {props.onClick}>
        <div className = "tile is-child box">
            <figure className ="image is-4by3">
                <img src= {props.image} alt = "Dog" />
            </figure>
        </div>
    </div>

)

export default PlayerCard;