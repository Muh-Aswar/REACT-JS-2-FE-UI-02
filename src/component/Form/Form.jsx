import React from "react";
import "./Form.css";
import logo from "../img/react.svg";

class Form extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" className="logo" />
        <h2 className="teks">Selamat Datang di Aplikasi React </h2>
        <form className="form">
          <label for="fname">Username</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Input Username anda..."
          />

          <label for="lname">Password</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Input Password anda..."
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
