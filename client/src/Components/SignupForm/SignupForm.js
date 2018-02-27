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
							class="form-control"
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
							class="form-control" 
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
							class="form-control"
							required
						/>
					</p>
					<br></br>
					<p>
						{/*<span>Confirm Password:   </span>*/}
						<input
							id="password"
							type="password"
							placeholder="Confirm Password"
							class="form-control" 
							required 
						/>
					</p>
					<br></br>
				</form>
			</div>;

export default SignupForm;
