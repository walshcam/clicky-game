import React from "react";

const Body = ({children}) => (
    <section className = "section">
        <div className = "container"> 
            <div className = "columns is-multiline is-mobile">   
                {children}
            </div>
        </div>
    </section>
)



export default Body;