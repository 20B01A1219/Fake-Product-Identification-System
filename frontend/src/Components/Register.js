import React, { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Register() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [empid, setempid] = useState("");
  const [password, setpassword] = useState("");
  function emailupdate(event) {
    setemail(event.target.value);
  }
  function nameupdate(event) {
    setname(event.target.value);
  }
  function companyupdate(event) {
    setcompany(event.target.value);
  }
  function empidupdate(event) {
    setempid(event.target.value);
  }
  function passwordupdate(event) {
    setpassword(event.target.value);
  }
  const registeruser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          name,
          company,
          empid,
          password,
        })
        .then((response) => {
          toast.success(response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((error) => {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
      setemail("");
      setname("");
      setcompany("");
      setempid("");
      setpassword("");
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className="register">
      <div className="registerbox">
        <h1>Register Now !!</h1>
        <div className="registerinputs">
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={emailupdate}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={nameupdate}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter company"
              value={company}
              onChange={companyupdate}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter employee id"
              value={empid}
              onChange={empidupdate}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={passwordupdate}
            />
          </div>
          <button onClick={registeruser}>Register</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Register;
