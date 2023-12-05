import React from "react";
import "./Profile.css";
import profileimg from './profileimg.png';
function Profile() {
  var currentuser = JSON.parse(localStorage.getItem("currentuser"));
  return (
    <div className="homepage">
      <div className="table">
      <table>
        <tr>
          <td >
            <p>Name</p>
          </td>
          <td>
            <p> {currentuser.name}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Email</p>
          </td>
          <td>
            <p>{currentuser.email}</p>{" "}
          </td>
        </tr>
        <tr>
          <td>
            <p>company</p>
          </td>
          <td>
            <p>{currentuser.company}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Empid</p>
          </td>
          <td>
            <p>{currentuser.empid}</p>
          </td>
        </tr>
      </table>
      <p className="productp">Number of products added  : </p>
      <button className="productdetailsbtn">Product details</button>
      </div>
      <div className="profileicon">
        <img src={profileimg} alt="" />
      </div>
    </div>
  );
}

export default Profile;
