import React from "react";

const TopBar = (props) => (

    <nav className = "navbar is-fixed-top has-text-centered">
        <div className = "navbar-start navbar-item">
            <h1 className = "is-size-3">Clicky Game</h1>
        </div>

        {/* <div className = "has-text-centered is-4">
            <h1 className = "is-size-3">Click On An Image!</h1>
        </div> */}

        <div className = "navbar-end navbar-item">
            <h1 className = "is-size-3">Top Score: {props.count} | High Score: {props.maxCount}</h1>
        </div>
    </nav>

)

export default TopBar;