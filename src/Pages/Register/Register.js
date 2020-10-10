import React from 'react';
import './Register.css';

import Form from '../../components/Container/Form';


const Register = () => {
    return (
        <section id="login-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-container">
                            <h3>Sign up</h3>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Register;