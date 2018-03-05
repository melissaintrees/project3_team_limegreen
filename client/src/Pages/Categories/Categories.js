import React, { Component } from 'react';
import Categories from '../../Components/Categories/Categories';
import AppHeader from '../../Components/AppHeader/AppHeader';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';
import { Link } from "react-router-dom";

class CategoryOptions extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            question: "here",
            answer: "testing",
            answerState: 1,
        };
    }

    render() {
        return (
            <div>
            <div className="container">
                
                <div className="row ">

                    <div className="col-0 col-lg-3"></div>
                    <div className="col-12 col-lg-6">
                        <AppHeader
                        /> 
                            <div className="text-center border categ-content-div">
                                <h5>Pick a super fun category!</h5>
                            <Categories
                            />
                            <LogoutBtn
                            />

                            </div>
                
                    </div>
                    <div className="col-0 col-lg-3"></div>
                </div>

                </div>
            </div>                
        

        );
    };
};

export default CategoryOptions;