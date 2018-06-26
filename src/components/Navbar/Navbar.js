import React from "react";

const Navbar = props => (
    <div className="navbar navbar-light bg-light">{props.children}
        <div className="score"> High Score: {props.highScoreinNav} </div>
        <div className="score"> Current Score: {props.currScoreinNav} </div>
    </div>

);

export default Navbar;
