import React, { Component } from 'react';
import axios from 'axios';
import Answer from '../../Components/Answer/Answer'
import Input from '../../Components/Input/Input';
import AppHeader from '../../Components/AppHeader/AppHeader';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import Question from '../../Components/Question/Question';


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
                <AppHeader 
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
                <ContinueBtn 
                onClick={this.handleFormSubmit}
                />
                <Answer
                />
            </div>
        );
    };
};

export default Login;