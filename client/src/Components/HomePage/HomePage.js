import React from "react";
import "./HomePage.css";

const HomePage = () => (
    <div>
        <div>
            <div class="container">

                <div class="row">
                    <div class="col-0 col-lg-3"></div>
                    <div class="col-12 col-lg-6 ">
                        <div class="text-center border main-content-div">
                            {/* https://stackoverflow.com/questions/42580130/display-images-in-react-using-jsx-without-import */}
                            <img className="img-fluid img-div mx-auto d-block" alt="cute lion cartoon" src={require('../../static_code_aquarium/images/lion.jpg') } />
                        </div>
                    </div>
                    <div class="col-0 col-lg-3"></div>
                </div>

                <div class="row">
                    <div class="col-0 col-lg-3"></div>
                    <div class="col-12 col-lg-6 ">
                    </div>
                    <div class="col-0 col-lg-3"></div>
                </div>

            </div>
        </div>
        
    </div>
);

export default HomePage;