import React, { Component } from 'react';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import Input from '../../Components/Input/Input';
import axios from 'axios';
import { Redirect } from "react-router-dom";

// https://javascriptexamples.info/code/react-router-v4-redirect/

class Signup extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
            fireRedirect: false
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      setSignupSuccess = () => {
          this.setState( { fireRedirect: true } );
      }

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.username && this.state.password.length > 0 && this.state.confirmpassword.length > 0 && this.confirmPassword()) {
            console.log("Form success");
           
            // React Redirect to Categories
            this.setSignupSuccess();

        // axios.post('/users/signup', {
        //     email: this.state.email,
        //     username: this.state.username,
        //     password: this.state.password
            
        //     })
        //     .then(function (response) {
        //        this.setSignupSuccess(); 
        //     console.log(response);

        //     // React Redirect to Categories
        //     })
        //     .catch(function (error) {
        //     console.log(error);
        //     });
        }
        else {
            alert("Form is invalid")
        }
      };

      confirmPassword = () => {
        if (this.state.password === this.state.confirmpassword) {
            return  true;

        }
        else {
            alert("Your password does not match. Please enter matching passwords")
            return false;
        }
    };


    render() {
        // const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return (
            <div>

            <div className="container">
                <div className="row ">
                    <div className="col-0 col-lg-3"></div>
                    <div className="col-12 col-lg-6">
                        <AppHeader 
                        />
                            <div className="text-center border signup-content-div">

                                <form className="form-horizontal">
                                    <div className="sign-up-bg">
                                        <h3>Create an Account</h3>
                                        <div className="form-group">
                                            <label for="inputEmail3" class="col-sm-2 col-xs-1 control-label"></label>
                                            <div className="col-sm-8 col-xs-10">
                                                <Input
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
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
                                        <div className="form-group">
                                            <label for="inputPassword3" class="col-sm-2 col-xs-1 control-label"></label>
                                            <div className="col-sm-8 col-xs-10">
                                                <Input
                                                    value={this.state.confirmpassword}
                                                    onChange={this.handleInputChange}
                                                    name="confirmpassword"
                                                    placeholder="Confirm Password"
                                                />
                                            </div>
                                        </div>
                                        <p className="help-block">By creating an account you agree to our 
                                            Terms of Service and Privacy Policy
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">
                                            {/* Originally in the cont. btn. comp. but removed to get link working */}
                                            {/* onClick={this.handleFormSubmit}  */}

                                                <ContinueBtn onClick={this.handleFormSubmit}
                                                />
                                                    
                                                {fireRedirect && (
                                                    <Redirect to={'/categories'} />
                                                )}
                                        </div><div>
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

export default Signup;