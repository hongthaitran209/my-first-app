import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getUserDetail, updateUser } from '../../Actions/User';
import { useForm } from 'react-hook-form';
import _ from "lodash";

const UserDetail = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect( () => {
        getUserDetail(JSON.parse(localStorage.getItem("currentUser")).taiKhoan)
    })

    const userDetail = {
        taiKhoan: JSON.parse(localStorage.getItem("currentUser")).taiKhoan,
        hoTen: JSON.parse(localStorage.getItem("currentUser")).hoTen,
        soDT: JSON.parse(localStorage.getItem("currentUser")).soDT,
        email: JSON.parse(localStorage.getItem("currentUser")).email,
        maNhom: JSON.parse(localStorage.getItem("currentUser")).maNhom,
        maLoaiNguoiDung: "HV",
    }

    const onSubmit = (userData) => {

        userData = {
            ...userData,
            maLoaiNguoiDung: userDetail.maLoaiNguoiDung,
            matKhau: JSON.parse(localStorage.getItem("getUserDetail")).matKhau,
        }
        updateUser(userData, (result) => {
            if (_.isObject(result)) {
                alert("Your information is updated after logging out");
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
            <Button onClick={toggle} className="sign-up-button">USER DETAIL</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>USER DETAIL</ModalHeader>
                <ModalBody>
                    <p>Please fill in this form if you want to update your detail.</p>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
                        <label htmlFor="taiKhoan"><b>Account</b></label>
                        <input type="text" name="taiKhoan" defaultValue={userDetail.taiKhoan} ref={register()} disabled />

                        <label htmlFor="hoTen"><b>Full name</b></label>
                        <input type="text" placeholder="Enter your name" name="hoTen" defaultValue={userDetail.hoTen || ''}
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /[A-Za-z]/,
                                    message: "Name cannot include any special character or number"
                                }
                            })} />
                        <p>{errors.hoTen && errors.hoTen.message} &#160;</p>

                        <label htmlFor="soDT"><b>Phone number</b></label>
                        <input type="number" placeholder="Enter your phone number" name="soDT" defaultValue={userDetail.soDT || ''}
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /[0-9]/,
                                    message: "Please enter number only",
                                }
                            })} />
                        <p>{errors.soDT && errors.soDT.message} &#160;</p>

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter your email" name="email" defaultValue={userDetail.email || ''}
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email"
                                }
                            })} />
                        <p>{errors.email && errors.email.message} &#160;</p>

                        <label htmlFor="maNhom"><b>Group number</b></label>
                        <input type="text" placeholder="Enter your group number" name="maNhom" defaultValue={userDetail.maNhom || ''}
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^GP0([1-9]{1}$)/,
                                    message: "Format of group number: GP01 ~ 9"
                                }
                            })} />
                        <p>{errors.maNhom && errors.maNhom.message} &#160;</p>

                        <input type="submit" color="primary" className="btn btn-primary" value="Update" />
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default UserDetail;