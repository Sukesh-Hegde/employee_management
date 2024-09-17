import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../context/employeeContext";
const Signup = () => {
  const host = process.env.REACT_APP_BACKEND_URL;

  const context = useContext(EmployeeContext);
  console.log(host);
  
  const { showAlert } = context;

  const [credential, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;

    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    console.log(json);
    

    if (json.success) {
      // Save the token and the name in localStorage
      localStorage.setItem("token", json.token); // Assuming a token is returned
      localStorage.setItem("name", json.name); // Storing the name directly

      // Navigate to the desired page after login
      navigate("/");
      showAlert("Signed in Successfully", "success");
    } else {
      // Show error alert
      showAlert("Invalid credentials", "danger");
    }
  };


  const onChange = (e) => {
    setCredentials({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            name="password"
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            name="cpassword"
            required
            minLength={5}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
