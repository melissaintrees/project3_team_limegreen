import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../Components/Input/Input';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';


class Login extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
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
            axios.post('https://mysterious-bastion-34346.herokuapp.com/users/login', {
                username: this.state.username,
                password: this.state.password
              })
              // .then(function (response) {
              //   console.log(response);
              // })
              // .catch(function (error) {
              //   console.log(error);
              // });
        }
      };

    render() {
        return (
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
                                        <div class="col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">
                                            {/* this event handler goes in the continuebtn component but was commented out to get the links working  */}
                                            {/* onClick={this.handleFormSubmit} */}
                                            <ContinueBtn
                                                
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-0 col-lg-3"></div>
                        </div>

                        <div className="row">
                            <div className="col-0 col-lg-3"></div>
                            <div className="col-12 col-lg-6 ">

                            </div>
                            <div className="col-0 col-lg-3"></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    };
};

export default Login;