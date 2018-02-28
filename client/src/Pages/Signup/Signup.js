import React, { Component, Alert } from 'react';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn';
import AppHeader from '../../Components/AppHeader/AppHeader';
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

    confirmPassword = () => {
        if (this.state.password === this.state.confirmpassword) {
            handleFormSubmit();
        }
        else {
            Alert.alert("Your password does not match. Please enter matching passwords")
        }
    };

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



    render() {
        return (
            <div>
                <form>
                    <AppHeader 
                    />
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
                </form>
                <ContinueBtn
                    onClick={this.handleFormSubmit} 
                />
            </div>
        );
    };
};

export default Signup;

























// class UserSignup extends React.Component {
//     render() {
//         return (
// 			<div className="UserSingup">
// 				<input 
// 					id={this.props.id}
// 					autoComplete="false"
// 					required
// 					type={this.props.type}
// 					placeholder={this.props.placeholder}
// 				/>	
// 				<label htmlFor={this.props.id}></label>
// 			</div>
// 		);
// 	}
// };


// class SignupForm extends React.Component {
//     render ()
//     return {
// 	getInitialState: { ( mounted: false );
// 	},
// 	componentDidMount: function() {
// 		this.setState({ mounted: true });
// 	},
	
// 	handleSubmit: function(event) {
// 		this.setState({ mounted: false });
// 		event.preventDefault();
// 	},

// 	render: function() {
// 		var child;

// 		if(this.state.mounted) {
// 			child = (<Modal onSubmit={this.handleSubmit} />);
// 		}
		
// 		return(
// 			<div className="SignupForm">
// 				<ReactCSSTransitionGroup 
// 					transitionName="example"
// 					transitionEnterTimeout={500}
// 					transitionLeaveTimeout={300}>
// 						{child}
// 				</ReactCSSTransitionGroup>
// 			</div>
// 		);
// 	};
// };
// }