import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { signUp, getUserDetail } from '../../Actions/User';
import { useForm } from 'react-hook-form';
import _ from "lodash";

const SignUp = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // let userData = {
    //     taiKhoan: "",
    //     matKhau: "",
    //     hoTen: "",
    //     soDT: "",
    //     maNhom: "GP03",
    //     email: ""
    // }

    // const onChange = (e) => {
    //     userData = {
    //         ...userData,
    //         [e.target.name]: e.target.value,
    //     }
    //     console.log(userData);
    // }

    const onSubmit = (userData) => {

        signUp(userData, (result) => {
            if (_.isObject(result)) {
                alert("Dang ky thanh cong");
                toggle();
            } else {
                alert(result)
            }
        })
        console.log(userData);

    }
    
    const { register, handleSubmit, watch, errors } = useForm()

    return (
        <div className="sign-up">
            <Button onClick={toggle} className="sign-up-button">SIGN UP</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>SIGN UP</ModalHeader>
                <ModalBody>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
                        <label htmlFor="taiKhoan"><b>Account</b></label>
                        <input type="text" placeholder="Enter Account" name="taiKhoan"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /[A-Za-z][0-9]/,
                                    message: "Account needs to include character and number"
                                }
                            })} />
                        <p>{errors.taiKhoan && errors.taiKhoan.message} &#160;</p>

                        <label htmlFor="matKhau"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="matKhau"
                            ref={register({
                                required: true,
                                minLength: 10,
                            })} />
                        <p>{errors.matKhau && "Password must be at least 10 character"} &#160;</p>

                        <label htmlFor="hoTen"><b>Full name</b></label>
                        <input type="text" placeholder="Enter your name" name="hoTen"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /[A-Za-z]/,
                                    message: "Name cannot include any special character or number"
                                }
                            })} />
                        <p>{errors.hoTen && errors.hoTen.message} &#160;</p>

                        <label htmlFor="soDT"><b>Phone number</b></label>
                        <input type="number" placeholder="Enter your phone number" name="soDT"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /[0-9]/,
                                    message: "Please enter number only",
                                }
                            })} />
                        <p>{errors.soDT && errors.soDT.message} &#160;</p>

                        <label htmlFor="maNhom"><b>Group number</b></label>
                        <input type="text" placeholder="Enter your group number" name="maNhom"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^GP0([1-9]{1}$)/,
                                    message: "Format of group number: GP01 ~ 9"
                                }
                            })} />
                        <p>{errors.maNhom && errors.maNhom.message} &#160;</p>

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter your email" name="email"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email"
                                }
                            })} />
                        <p>{errors.email && errors.email.message} &#160;</p>

                        <input type="submit" color="primary" className="btn btn-primary" value="Sign up" />
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default SignUp;