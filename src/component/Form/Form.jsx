import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form>
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
