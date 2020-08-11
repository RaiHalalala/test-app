import React from 'react';

import './app-body-login.css';

const Login = ({onValueChangeName, onValueChangePassword, onSubmit, text}) => {
    return(
            <div className="login">
                    <form 
                        className="user-form"
                        onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder="UserName"
                            onChange={onValueChangeName}
                            value={text}
                            />
                        <input
                            type="text"
                            placeholder="Password"
                            onChange={onValueChangePassword}
                            value={text}/>
                        <button
                            type="submit">Send</button>
                    </form>
            </div>
        )
};

export default Login;
