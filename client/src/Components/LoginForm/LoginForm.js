import React from 'react';
import "./LoginForm.css";

const LoginForm = props =>
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
				</form>
			</div>;

export default LoginForm;