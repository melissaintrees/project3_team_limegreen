import React from 'react';
// import './SingupForm.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class UserSignup extends React.Component {
    render() {
        return (
			<div className="UserSingup">
				<input 
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>	
				<label htmlFor={this.props.id}></label>
			</div>
		);
	}
};

class Modal extends React.Component {
    render() {
        return (
			<div className="Modal">
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<UserSignup
						id="Username"
						type="text"
						placeholder="Hint: Don't use your real name" />
					<UserSignup
						id="email"
						type="email"
						placeholder="flibbitygibbit@gmail.com" />
					<UserSignup
						id="password"
						type="password"
						placeholder="Password" />
                    <UserSignup
						id="password"
						type="password"
						placeholder="Confirm Password" />
					<button>
						Log in <i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>
		);
	}
};

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

export default SignupForm;
