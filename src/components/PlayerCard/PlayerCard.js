import React from "react";
import "./PlayerCard.css"

const PlayerCard = (props) => (

    <div className = "column is-2-tablet is-one-third-mobile is-parent">
        <div className = "tile is-child box" id = {props.id} onClick = {() => props.choosePicture(props.id)}>
            <figure className ="image is-4by3">
                <img src= {props.image} alt = "Dog" />
            </figure>
        </div>
    </div>

)

export default PlayerCard;