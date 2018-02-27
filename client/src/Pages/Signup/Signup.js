import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import ContinueBtn from '../../Components/ContinueBtn/ContinueBtn'
import Header from '../../Components/Header/Header'
import SignupForm from '../../Components/SignupForm/SignupForm'



class Signup extends Component {    
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
                <Header />
                <SignupForm />
                <ContinueBtn />
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