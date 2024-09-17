import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../assets/UserReducer";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [image, setImage] = useState(null);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users[users.length - 1].id + 1,
      name,
      email,
      mobileNo,
      designation,
      gender,
      course,
      image,
    };
    dispatch(addUser(newUser));
    navigate("/");
  };

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    if (e.target.checked) {
      setCourse([...course, selectedCourse]);
    } else {
      setCourse(course.filter((c) => c !== selectedCourse));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
    } else {
      alert("Please select a valid image file (jpg/png)");
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mobileNo">Mobile No:</label>
            <input
              type="tel"
              name="mobileNo"
              className="form-control"
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={(e) => setMobileNo(e.target.value)}
              title="Mobile number should be 10 digits long"
              required
            />
          </div>

          <div>
            <label htmlFor="designation">Designation:</label>
            <select
              name="designation"
              className="form-control"
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div>
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </div>
          </div>
          <div>
            <label>Course:</label>
            <div>
              <input
                type="checkbox"
                name="course"
                value="MCA"
                onChange={handleCourseChange}
              />{" "}
              MCA
              <input
                type="checkbox"
                name="course"
                value="BCA"
                onChange={handleCourseChange}
              />{" "}
              BCA
              <input
                type="checkbox"
                name="course"
                value="BSC"
                onChange={handleCourseChange}
              />{" "}
              BSC
            </div>
          </div>
          <div>
            <label htmlFor="image">Image Upload:</label>
            <input
              type="file"
              accept="image/jpeg, image/png"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
