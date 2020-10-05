import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailAndPasswordAndName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);


    console.log(msgError);

    const [{ name, email, password, password2 }, handleInputChange] = useForm({
        name: 'Nestor',
        email: 'nestor@nestor.com',
        password: '123456',
        password2: '123456'
    });

    const handleRegister = e => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailAndPasswordAndName(email, password, name));
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            handleError('Name is required');
            return false;
        } else if (!validator.isEmail(email)) {
            handleError('email is not valid');
            return false;
        } else if (password < 6) {
            handleError('Password should be at least 6 characters');
            return false;
        } else if (password !== password2) {
            handleError('Password should match');
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const handleError = (error) => dispatch(setError(error))

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >
                {msgError !== null &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already have an account
                </Link>
            </form>
        </>
    )
}
