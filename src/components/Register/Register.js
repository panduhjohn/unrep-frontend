import React, { Component } from 'react';
import validator from 'validator';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputGroup from '../shared/InputGroup';
import ButtonGroup from '../shared/ButtonGroup';

import { createUser, isAuthenticated } from '../Helpers/AuthHelpers';

import './Register.css';

export default class Register extends Component {
    state = {
        canSubmit: true,
        formSetting: {
            username: {
                name: 'username',
                placeholder: 'Enter Username',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
            email: {
                name: 'email',
                placeholder: 'Enter Email',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
            password: {
                name: 'password',
                placeholder: 'Enter Password',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
        },
        validate: {
            usernameError: {
                noError: null,
                message: '',
            },
            emailError: {
                noError: null,
                message: '',
            },
            passwordError: {
                noError: null,
                message: '',
            },
        },
    };

    componentDidMount() {
        if (isAuthenticated()) {
            this.props.history.push('/cocktails');
        }
    }

    onChangePassword = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => {
                //'A9-5q%NK?BhJ2]3

                //?Password
                if (this.state.password.length >= 8) {
                    this.setState({
                        error: null,
                    });
                    let validatedPassword = validator.matches(
                        this.state.password,
                        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
                    );
                    if (!validatedPassword) {
                        toast.error(
                            '🐒 Need Upper/Lower Case, number and special character!',
                            {
                                position: 'top-center',
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            }
                        );
                    } else {
                        this.setState({
                            error: null,
                        });
                    }
                } else {
                    toast.error('🐒 Password must be 8 characters!', {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        );
    };

    onChangeEmail = (e) => {
        let isEmail = validator.isEmail(this.state.email);

        this.setState({
            [e.target.name]: e.target.value,
        });

        if (!isEmail) {
            toast.error('🐒 Enter Email!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            this.setState({
                emailError: null,
            });
        }
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const { email, password, username } = this.state.formSetting;

        try {
            await createUser({
                email: email.value,
                password: password.value,
                username: username.value,
            });

            let inputForm = {
                ...this.state.formSetting,
            };

            inputForm['email'].value = '';
            inputForm['password'].value = '';
            inputForm['username'].value = '';

            toast.success('🐒 Login Now', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            this.setState({
                ...this.state,
                formSetting: inputForm,
            });

            
        } catch (e) {
            console.log(e);
            toast.error(e.message, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    checkInputValidation = (errorState, inputName, inputValue) => {
        switch (inputName) {
            case 'username':
                //check if username has a length of 1-20
                //it is only character and digits
                // if error: console.log('cannot contain special characters')
                // else return null

                let validatedUsername;
                validatedUsername = validator.matches(
                    inputValue,
                    /^[a-zA-Z0-9]{1,20}$/
                );

                if (!validatedUsername) {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message =
                        'Cannot contain special characters, minimum 2 and max 20';
                    return errorState;
                } else {
                    //TODO: HOW DO WE TURN OFF THE ERROR MESSAGE?
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message = '';
                    return errorState;
                }

            case 'email':
                let validatedEmail;
                validatedEmail = validator.isEmail(inputValue);

                if (!validatedEmail) {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = 'Must be a valid email';
                    return errorState;
                } else {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = '';
                    return errorState;
                }

            case 'password':
                let validatedPassword = true;
                // validatedPassword = validator.matches(
                //     inputValue,
                //     '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'
                // );
                if (!validatedPassword) {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message =
                        'Password have one upper/lower case, special character, number and be between 8-20 characters';
                    return errorState;
                } else {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message = '';
                    return errorState;
                }

            default:
                return errorState;
        }
    };

    onChange = (event) => {
        //1. we need to grab the value of the current state
        //2. our state is an obj, how do we know what to put
        // spread the state of formsetting object
        // set the value of the state object with e.target.value
        // use checkInputValidation to verify if input is good

        let inputForm = {
            ...this.state.formSetting,
        };

        inputForm[event.target.name].value = event.target.value;

        let isValidatedCheck = this.checkInputValidation(
            this.state.validate,
            event.target.name,
            event.target.value
        );

        //! Display Error messages for signup.
        inputForm['username'].error = isValidatedCheck.usernameError;
        inputForm['email'].error = isValidatedCheck.emailError;
        inputForm['password'].error = isValidatedCheck.passwordError;

        // const { validate } = this.state;
        // if (
        //     validate.usernameError.noError === null &&
        //     validate.emailError.noError === null &&
        //     validate.passwordError.noError === null
        // ) {
        //     this.setState({
        //         canSubmit: false,
        //     });
        //     console.log('Submit working?');
        // } else {
        //     console.log('Error in username, email and/or password');
        // }

        if (
            inputForm['email'].error.noError === false ||
            inputForm['password'].error.noError === false ||
            inputForm['username'].error.noError === false
        ) {
            this.setState({
                canSubmit: true,
            });
            return;
        }

        if (
            inputForm['email'].error.noError === true &&
            inputForm['password'].error.noError === true &&
            inputForm['username'].error.noError === true
        ) {
            this.setState({
                canSubmit: false,
            });
            return;
        } else {
            this.setState({
                ...this.state,
                formSetting: inputForm,
            });
        }
    };

    canSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const { formSetting, canSubmit } = this.state;
        //? loop through formSetting object
        let inputArray = [];
        for (let key in formSetting) {
            inputArray.push({
                formSetting: formSetting[key],
            });
        }
        return (
            <div className='signup-container'>
                <ToastContainer
                    position='top-center'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    {inputArray.map((element) => {
                        const {
                            formSetting: { name, placeholder, value, error },
                        } = element;
                        // console.log(element);
                        return (
                            <InputGroup
                                key={name}
                                name={name}
                                placeholder={placeholder}
                                onChange={this.onChange}
                                value={value}
                                error={error}
                                type={name}
                            />
                        );
                    })}

                    <ButtonGroup
                        // key={key}
                        buttonStyle='form-button'
                        title='Register'
                        disabled={canSubmit}
                    />
                    
                </form>
            </div>
        );
    }
}
