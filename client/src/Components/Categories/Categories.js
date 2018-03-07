import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = props => (
    <div> 
            <div className="html">
                <Link to="/game">
                    <button type="button" className="btn btn-html btn-lg btn-block" {...props}>
                    <img className="img-div-categ" alt="cute penguin cartoon" src={require('../../static_code_aquarium/images/penguin.png')} /> <p class="categ-text">HTML PENGUINS</p>
                    </button>
                </Link>
            </div>
            <div className="css">
                <Link to="/game">
                    <button type="button" className="btn btn-css btn-lg btn-block" {...props}>
                        <img className="img-div-categ" alt="cute zebra cartoon" src={require('../../static_code_aquarium/images/zebra.png')} /> <p class="categ-text">CSS ZEBRAS</p>
                    </button>
                </Link>
            </div>
            <div className="algo">
                <Link to="/game">
                    <button type="button" className="btn btn-algo btn-lg btn-block" {...props}>
                        <img className="img-div-categ" alt="cute alligator cartoon" src={require('../../static_code_aquarium/images/alligator.png')} /> <p class="categ-text">ALGORITHM ALLIGATORS</p>
                    </button>
                </Link>
            </div>

    </div>
);

export default Categories;