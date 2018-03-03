import React, { Component } from 'react';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import Input from '../../Components/Input/Input';
import axios from 'axios';


class Signup extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
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
        if (this.state.email && this.state.username && this.state.password && this.state.confirmpassword) {
            axios.post('/signup', {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
      };

      confirmPassword = () => {
        if (this.state.password === this.state.confirmpassword) {
            this.handleFormSubmit();
        }
        else {
            alert("Your password does not match. Please enter matching passwords")
        }
    };


    render() {
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
                                                    onChange={this.confirmPassword}
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
                                        <div class="col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">
                                        <ContinueBtn
                                            onClick={this.handleFormSubmit}
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

export default Signup;