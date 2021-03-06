import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../Components/Input/Input';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
     
import { Route, Redirect } from 'react-router'
// https://javascriptexamples.info/code/react-router-v4-redirect/
// >>>>>>> a913fa0d1f7e17e33b724400dd56f9606fedf3ac

class Login extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            redirect: false,
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            console.log("Form Success");
            // React Redirect to Scores  
        let that = this;
        axios.post('/users/login', {
            username: that.state.username,
            password: that.state.password
            })
            .then(function (response) {
                console.log(response);
                //React Redirect to Scores
                if(response.data){
                    console.log('welinkin');
                    that.setState({
                        redirect: true
                    })
                }
                else{
                    alert('Incorrect password');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else {
            alert("User is not in database")
        }
    };

    render() {
        return (
            this.state.redirect ?
            <Redirect to="/categories" />
            :
            <div>
                 {/* html for the login form: */}
                <div className="container">
                    <div className="row ">
                        <div className="col-0 col-lg-3"></div>
                        <div className="col-12 col-lg-6">
                            <AppHeader
                            />
                            <div className="text-center border signup-content-div">

                                <form className="form-horizontal">
                                    <div className="login-bg">
                                        <h3>Sign In!</h3>
                                        <div className="form-group">
                                            <label for="inputEmail3" class="col-sm-2 col-xs-1 control-label"></label>
                                            <div className="col-sm-8 col-xs-10">
                                                <Input
                                                    value={this.state.username}
                                                    onChange={this.handleInputChange}
                                                    name="username"
                                                    placeholder="Username"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputPassword3" class="col-sm-2 col-xs-1 control-label"></label>
                                            <div className="col-sm-8 col-xs-10">
                                                <Input
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange}
                                                    name="password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">
                                            {/* this event handler goes in the continuebtn component but was commented out to get the links working */}
                                            {/* onClick={this.handleFormSubmit} */}                    
                                            <ContinueBtn 
                                            onClick={this.handleFormSubmit.bind(this)} 
                                            
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-0 col-lg-3"></div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
};

export default withRouter(Login);