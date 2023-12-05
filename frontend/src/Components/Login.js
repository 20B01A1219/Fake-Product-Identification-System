import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
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
      await axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((response) => {
          if (response.data.length === 0) {
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
          } else {
            const currentuser = {
              name: response.data[0].name,
              email: response.data[0].email,
              company: response.data[0].company,
              empid: response.data[0].empid,
            };
            localStorage.setItem("currentuser", JSON.stringify(currentuser));
            toast.success("Welcome" + currentuser.name, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/manufacturer");
          }
        })
        .catch((error) => {
          console.log(error);
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
    <div className="login">
      <div className="login-box">
        <h1>Hurry up! One step to go</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={emailupdate}
            value={email}
          />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Password"
          onChange={passwordupdate}
          value={password} />
        </div>
        <div className="pswd">
         <Link to = "/forgetpassword" className="pswdlink">Forgot Password</Link>
        </div>
        <button type="submit" className="btn" onClick={userlogin}>
          Login
        </button>
        <br />
        <br />
        <div class="register-link">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
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

export default Login;
