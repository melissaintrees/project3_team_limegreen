import React from 'react';
// import './SingupForm.css';

const SignupForm = props =>
			<div className="Signup">
				<form 
					className="ModalForm">
					<input
						id="Username"
						type="text"
						placeholder="Hint: Don't use your real name" 
                        required />
					<input
						id="email"
						type="email"
						placeholder="flibbitygibbit@gmail.com" 
                        required />
					<input
						id="password"
						type="password"
						placeholder="Password" 
                        required />
                    <input
						id="password"
						type="password"
						placeholder="Confirm Password" 
                        required />
					<button className="submit">
						Create Account<i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>;

export default SignupForm;
