import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const emailupdate = (event) => {
    setemail(event.target.value);
  };
  const passwordupdate = (event) => {
    setpassword(event.target.value);
  };
  const userlogin = async (e) => {
    e.preventDefault();
    try {
      console.log(email + " " + password);
      await axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((response) => {
          if(response.data.length == 0){
            toast.error("Invalid login credentials", {
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
          else{
            toast.success("Login Success", {
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
          
          console.log(response.data);
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
        setpassword("");
    } catch {
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
    <div className="loginpage">
      <div className="logininputs">
        <label htmlFor=""> Email</label>
        <input
          type="text"
          className="form-control loginform-control"
          placeholder="Enter your emial"
          onChange={emailupdate}
          value={email}
        />
        <label htmlFor=""> Password</label>
        <input
          type="password"
          className="form-control loginform-control"
          placeholder="Enter your password"
          onChange={passwordupdate}
          value={password}
        />
      </div>
      <button className="btn btn-danger btn-lg loginbtn" onClick={userlogin}>
        Log in
      </button>
      <br />
      <p className="navtoregister">
        Don't have an account yet?{" "}
        <Link to="/register" className="navregister">
          Register here
        </Link>
      </p>
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

export default Login;
