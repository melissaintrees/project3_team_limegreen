import React from "react";
import "./HomePage.css";


const HomePage = () => (
    <div>
        {/* https://stackoverflow.com/questions/42580130/display-images-in-react-using-jsx-without-import */}
        <img className= "img-fluid img-div mx-auto d-block" src={require('../../static_code_aquarium/images/lion.jpg')} />
    </div>
);

export default HomePage;