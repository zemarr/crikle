import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../Context/UserContext';



const Form = () => {
    const [email, setEmail] = useContext(UserContext);

    // handleUsernameInput(event) {
    //     this.setState({
    //         username: event.target.value,
    //     })
    // }

    // handlePasswordInput(event) {
    //     this.setState({
    //         password: event.target.value,
    //     })
    // }


    return (
        <div className="form-input">
            <form className="email" onSubmit={(event) => {
                event.preventDefault();
                console.log(email);
            }}>
                <input type="email" name="email" id="email" placeholder="Enter your Email address" />
                {/* <span>{error}</span> */}
            </form>
            <Link to="/chat">
                <button className="proceed buttn" onClick={()=> {
                    console.log(email)
                }}>Proceed</button>
            </Link>

            <span>
                <Link to="/">Back to Home</Link>
            </span>
        </div>
    )

}

export default Form;