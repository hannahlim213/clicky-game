import React from "react";

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">{props.children}</h1>
        </div>
    </div>
)

export default Jumbotron;
