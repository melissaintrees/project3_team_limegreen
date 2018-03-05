import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = props => (
    <div> 
            <div className="html">
                <Link to="/gametwo">
                    <button type="button" className="btn btn-html btn-lg btn-block" {...props}>
                    <img className="img-div-categ" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/penguin.png')} /> <p class="categ-text">HTML PENGUINS</p>
                    </button>
                </Link>
            </div>
            <div className="css">
                <Link to="/gametwo">
                    <button type="button" className="btn btn-css btn-lg btn-block" {...props}>
                        <img className="img-div-categ" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/zebra.png')} /> <p class="categ-text">CSS ZEBRAS</p>
                    </button>
                </Link>
            </div>
            <div className="loops">
                <Link to="/gametwo">
                    <button type="button" className="btn btn-loops btn-lg btn-block" {...props}>
                        <img className="img-div-categ" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/squirrely.png')} /> <p class="categ-text">LOOPY SQUIRRELS</p>
                    </button>
                </Link>
            </div>

    </div>
);

export default Categories;