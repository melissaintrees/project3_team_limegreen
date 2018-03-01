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
                    <AppHeader 
                    />
                <form>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                    <Input
                        value={this.state.confirmpassword}
                        onChange={this.confirmPassword}
                        name="confirmpassword"
                        placeholder="Confirm Password"
                    />
                    <ContinueBtn
                        onClick={this.handleFormSubmit} 
                    />
                </form>
            </div>
        );
    };
};

export default Signup;