import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import Input from '../../Components/Input/Input'
import Header from '../../Components/Header/Header'
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
            axios.post('/login', {
                username: this.state.username,
                password: this.state.password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
      };

    render() {
        return (
            <div>
                <AppHeader 
                />
                <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
                <ContinueBtn 
                />
            </div>
        );
    };
};

export default Login;