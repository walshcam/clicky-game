import React from "react";

const PlayerCard = props => (
    <div className = "column is-3 is-parent" value = {props.value}>
        <div className = "tile is-child box">
            <figure class="image is-4by3">
                <img src= {props.image} />
            </figure>
        </div>
    </div>
)


export default PlayerCard;