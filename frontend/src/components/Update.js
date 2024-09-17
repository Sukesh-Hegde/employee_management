import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../assets/UserReducer";

export default function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email, mobileNo, designation, gender, course } =
    existingUser[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [umobileNo, setMobileNo] = useState(mobileNo);
  const [udesignation, setDesignation] = useState(designation);
  const [ugender, setGender] = useState(gender);
  const [ucourse, setCourse] = useState(course);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle file uploads if necessary
    const formData = {
      id,
      name: uname,
      email: uemail,
      mobileNo: umobileNo,
      designation: udesignation,
      gender: ugender,
      course: ucourse,
      image, // You can handle image file upload separately as needed
    };
    dispatch(updateUser(formData));
    navigate("/");
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={uname}
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
              value={uemail}
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
              value={umobileNo}
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="designation">Designation:</label>
            <select
              name="designation"
              className="form-control"
              value={udesignation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="M"
                checked={ugender === "M"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="F"
                checked={ugender === "F"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </div>
          </div>
          <div>
            <label htmlFor="course">Course:</label>
            <div>
              <input
                type="checkbox"
                name="course"
                value="MCA"
                checked={ucourse.includes("MCA")}
                onChange={(e) =>
                  setCourse(
                    e.target.checked
                      ? [...ucourse, "MCA"]
                      : ucourse.filter((c) => c !== "MCA")
                  )
                }
              />
              MCA
              <input
                type="checkbox"
                name="course"
                value="BCA"
                checked={ucourse.includes("BCA")}
                onChange={(e) =>
                  setCourse(
                    e.target.checked
                      ? [...ucourse, "BCA"]
                      : ucourse.filter((c) => c !== "BCA")
                  )
                }
              />
              BCA
              <input
                type="checkbox"
                name="course"
                value="BSC"
                checked={ucourse.includes("BSC")}
                onChange={(e) =>
                  setCourse(
                    e.target.checked
                      ? [...ucourse, "BSC"]
                      : ucourse.filter((c) => c !== "BSC")
                  )
                }
              />
              BSC
            </div>
          </div>
          <div>
            <label htmlFor="image">Image Upload:</label>
            <input
              type="file"
              name="image"
              accept=".jpg, .png"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
