import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
    state = {
        email: '',
        username: '',
        password: '',
    }

    handleEmailInput(event) {
        this.setState({
            email: event.target.value,
        })
    }

    handleUsernameInput(event) {
        this.setState({
            username: event.target.value,
        })
    }

    handlePasswordInput(event) {
        this.setState({
            password: event.target.value,
        })
    }

    render() {
        return (
            <div className="form-input">
                <form className="email">
                    <input type="email" name="email" id="email" placeholder="Enter your Email address"></input>
                    {/* <span>{error}</span> */}
                </form>
                <Link to="/">
                    <button className="proceed buttn">Proceed</button>
                </Link>

                <span>
                    <Link to="/">Back to Home</Link>
                </span>
            </div>
        )
    }
}

export default Form;