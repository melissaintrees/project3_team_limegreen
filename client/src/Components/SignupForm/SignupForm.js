import React from 'react';
import "./SignupForm.css";

const SignupForm = props =>
			<div className="Signup">
				<form className="ModalForm">
					<p>
						{/*<span>Username:   </span>*/}
						<input
							id="Username"
							type="text"
							placeholder="Username" 
							required 
						/>
					</p>
					<br></br>
					<p>
						{/*<span>Email:  </span>*/}
						<input
							id="email"
							type="email"
							placeholder="Email" 
							required 
						/>
					</p>
					<br></br>
					<p>
						{/*<span>Password:   </span>*/}
						<input
							id="password"
							type="password"
							placeholder="Password" 
							required />
					</p>
					<br></br>
					<p>
						{/*<span>Confirm Password:   </span>*/}
						<input
							id="password"
							type="password"
							placeholder="Confirm Password" 
							required />
					</p>
					<br></br>
					<button className="submit">
						Create Account<i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>;

export default SignupForm;
