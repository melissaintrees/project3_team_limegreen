import React from "react";
import "./Categories.css";

const Categories = props => (
    <div>
        <div className="html">
            <button type="button" className="btn btn-html btn-lg btn-block" {...props}>
            <img src="../../static_code_aqaurium/images/penguin"></img>HTML
            </button>
        </div>
        <div className="css">
            <button type="button" className="btn btn-css btn-lg btn-block" {...props}>
            <img src="../../static_code_aqaurium/images/squirrely"></img>CSS
            </button>
        </div>
        <div className="loops">
            <button type="button" className="btn btn-loops btn-lg btn-block" {...props}>
            <img src="../../static_code_aqaurium/images/zebra.png"></img>Loops
            </button>
        </div>
    </div>
);

export default Categories;