import React from "react";

const PlayerCard = props => (
    <div className = "tile is-parent is-4" value = {props.value}>
        <div className = "tile is-child box">
            <figure class="image is-4by3">
                <img src= {props.image} />
            </figure>
        </div>
    </div>
)


export default PlayerCard;