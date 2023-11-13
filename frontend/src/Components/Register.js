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
  const registeruser=async(e) =>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:8000/', {
        email,
        name,
        company,
        empid,
        password
      })
      .then(response => {
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
      .catch(error => {
        toast.error('Something went wrong', {
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
    }catch(error){
      toast.error('Something went wrong', {
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
    
  }
  return (
    <div className="register">
      <div className="registerinputs">
        <label>Email</label>
        <br />
        <input
          type="text"
          class="form-control registerform-control"
          placeholder="Enter your email"
          value={email}
          onChange={emailupdate}
        />
        <br />
        <label>Name</label>
        <br />
        <input
          type="text"
          class="form-control registerform-control"
          placeholder="Enter your name"
          value={name}
          onChange={nameupdate}
        />
        <br />
        <label>Company</label>
        <br />
        <input
          type="text"
          class="form-control registerform-control"
          placeholder="Enter your company"
          value={company}
          onChange={companyupdate}
        />
        <br />
        <label>Employee id</label>
        <br />
        <input
          type="text"
          class="form-control registerform-control"
          placeholder="Enter your employee id"
          value={empid}
          onChange={empidupdate}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          class="form-control registerform-control"
          placeholder="Enter your password"
          value={password}
          onChange={passwordupdate}
        />
        <br />
      </div>
      <button className="btn btn-danger btn-lg" onClick={registeruser}>
        Register
      </button>
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
