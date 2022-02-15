import React from "react";

class Login extends React.Component {

    render () {
        return (
            <div>
                <h1>Login</h1>
                <button onClick={this.props.onClickLogin}>Logar</button>
            </div>
        )
    }
}

export default Login
