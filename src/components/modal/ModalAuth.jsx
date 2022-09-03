import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import {  Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import css from '../../styles/modalAuth.module.css'
import {UserContext} from '../../context/UserContext'

export default function ModalAuth({ show,setShow}) {
  // modal check
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [shows, setShows] = useState(false);
  const handleShows = () => setShows(true);
  const handleCloses = () => setShows(false);

  const handleSwitchRegister = () => {
    setShow(false);
    setShows(true);
};
const handleSwitchLogin = () => {
  setShows(false);
  setShow(true);
};

    // functional
    const [login, setLogin] = useState({});

    const handleChange = (e) => {
      setLogin({
      ...login,
      [e.target.name]: e.target.value,
      });
  };
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let status;
    if (email === "admin@mail.com") {
    status = "admin";
    navigate("/transaction");
    } else {
    status = "customer";
    navigate("/");
    }

    const data = {
    email,
    password,
    status,
    };

    dispatch({
    type: "LOGIN_SUCCESS",
    payload: data,
    });
    setShow(false);
};
  return (
    <>
      <>
        {/* login */}
        <button className={css.btnLG} onClick={handleShow}>LOGIN</button>
        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <Modal.Header >
              <Modal.Title className={css.login1}>LOGIN</Modal.Title>
            </Modal.Header>
        
            <div className={css.form}>

            <input 
            className={css.input}
            type="email" 
            placeholder='Email'
            name="email"
            id='email'
            onChange={handleChange}
            />
            <input
            type="password"
            className={css.input}
            placeholder="password"
            name="password"
            id="password"
            onChange={handleChange}
            />
            <button type='submit' className={css.btndown}> LOGIN</button>
            </ div>

          <Modal.Footer>
            <p className={css.onclick1}>Don't have an account ? click <strong onClick={handleSwitchRegister}>Here</strong></p>
          </Modal.Footer>
        </form>
      </Modal>
      </>
      <>
      <button className={css.btnRG} onClick={handleShows}>REGISTER</button>
      <Modal show={shows} onHide={handleCloses}>
          <form >
            <Modal.Header >
              <Modal.Title className={css.login1}>REGISTER</Modal.Title>
            </Modal.Header>
        
            <div className={css.form}>

              <input
              type="text"
              className={css.input}
              placeholder="Name"
              name="name"
              id="name"
              // onChange={handleChange}
              />
            <input 
            className={css.input}
            type="email" 
            placeholder='Email'
            name="email"
            id='email'
            // onChange={handleChange}
            />
            <input
            type="password"
            className={css.input}
            placeholder="password"
            name="password"
            id="password"
            // onChange={handleChange}
            />
            <button type='submit' className={css.btndown}> LOGIN</button>
            </ div>

          <Modal.Footer>
            <p className={css.onclick1}>Already have an account ? click Here <strong onClick={handleSwitchLogin}>Here</strong></p>
          </Modal.Footer>
        </form>
      </Modal>
      </>
    </>
  )
}
