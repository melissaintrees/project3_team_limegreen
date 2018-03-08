import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = props => (
    <div> 
            <div className="html">
                <Link to="/game">
                    <button type="button" className="btn btn-html btn-lg btn-block" {...props}>
                    <img className="img-div-categ" alt="cute jellyfish cartoon" src={require('../../static_code_aquarium/images/jelly.png')} /> <p class="categ-text">HTML JELLYS</p>
                    </button>
                </Link>
            </div>
            <div className="css">
                <Link to="/game">
                    <button type="button" className="btn btn-css btn-lg btn-block" {...props}>
                        <img className="img-div-categ" alt="cute seahorse cartoon" src={require('../../static_code_aquarium/images/seahorse.png')} /> <p class="categ-text">CSS SEAHORSES</p>
                    </button>
                </Link>
            </div>
            <div className="algo">
                <Link to="/game">
                    <button type="button" className="btn btn-algo btn-lg btn-block" {...props}>
                        <img className="img-div-categ" alt="cute anglerfish cartoon" src={require('../../static_code_aquarium/images/anglerfish.png')} /> <p class="categ-text">ALGORITHM ANGLERFISH</p>
                    </button>
                </Link>
            </div>

    </div>
);

export default Categories;