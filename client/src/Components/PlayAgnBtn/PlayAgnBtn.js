import React from "react";
import "./PlayAgnBtn.css";
import { Link } from "react-router-dom";

const PlayAgnBtn = props => (
    <Link to="/categories">
        <button type="button" className="btn btn-playagn btn-lg btn-block" {...props}>
            PLAY AGAIN!
        </button>
    </Link>
);

export default PlayAgnBtn;