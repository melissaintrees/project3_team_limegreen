import React from "react";
import "./Categories.css";

const Categories = props => (
    <div> 
    
            <div className="html">
                <button type="button" className="btn btn-html btn-lg btn-block" {...props}>
                <img className="img-div-categ" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/penguin.png')} /> <p class="categ-text">HTML PENGUINS</p>
                </button>
            </div>
            <div className="css">
                <button type="button" className="btn btn-css btn-lg btn-block" {...props}>
                    <img className="img-div-categ" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/zebra.png')} /> <p class="categ-text">CSS ZEBRAS</p>
                </button>
            </div>
            <div className="loops">
                <button type="button" className="btn btn-loops btn-lg btn-block" {...props}>
                    <img className="img-div-categ" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/squirrely.png')} /> <p class="categ-text">LOOPY SQUIRRELS</p>
                </button>
            </div>

    </div>
);

export default Categories;