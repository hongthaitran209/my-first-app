import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { logIn } from '../../Actions/User';
import { withRouter } from 'react-router-dom';

const LogIn = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let userData = {
        taiKhoan: '',
        matKhau: '',
    }

    const onChange = (e) => {
        userData = {
            ...userData,
            [e.target.name] : e.target.value
        }
    }

    const onLogIn = () => {
        
        logIn(userData, (res) => {
            if (res !== "Tài khoản hoặc mật khẩu không đúng!") {
                toggle();
                if (res.maLoaiNguoiDung === "GV") {
                    props.history.push("/admin/course-page")
                } else {
                    window.location.reload();
                }  
            } else {
                alert("Tài khoản hoặc mật khẩu không đúng!")
            }
            
        });
        
    }

    return (
        <div className="log-in">
            <Button onClick={toggle} className="log-in-button">LOG IN</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>LOG IN</ModalHeader>
                <ModalBody>
                    <div>
                        <div>
                            <label htmlFor="taiKhoan"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="taiKhoan" required onChange={onChange} />
                            <label htmlFor="matKhau"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="matKhau" required onChange={onChange} />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onLogIn}>Log in</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default withRouter(LogIn);