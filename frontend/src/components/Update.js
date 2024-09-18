import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../assets/UserReducer";

export default function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  const { name, email, mobileNo, designation, gender, course, image } =
    existingUser || {};

  const [uname, setName] = useState(name || "");
  const [uemail, setEmail] = useState(email || "");
  const [umobileNo, setMobileNo] = useState(mobileNo || "");
  const [udesignation, setDesignation] = useState(designation || "");
  const [ugender, setGender] = useState(gender || "");
  const [ucourse, setCourse] = useState(course || []);
  const [newImage, setNewImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(image || "");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = {
      id,
      name: uname,
      email: uemail,
      mobileNo: umobileNo,
      designation: udesignation,
      gender: ugender,
      course: ucourse,
      image: newImage ? imageUrl : image, 
    };
    dispatch(updateUser(formData));
    navigate("/");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(file);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (jpg/png)");
    }
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
                  setCourse((prevCourses) =>
                    e.target.checked
                      ? [ "MCA"]
                      : prevCourses.filter((c) => c !== "MCA")
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
                  setCourse((prevCourses) =>
                    e.target.checked
                      ? [ "BCA"]
                      : prevCourses.filter((c) => c !== "BCA")
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
                  setCourse((prevCourses) =>
                    e.target.checked
                      ? [ "BSC"]
                      : prevCourses.filter((c) => c !== "BSC")
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
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                style={{ marginTop: "10px", width: "100px", height: "100px" }}
              />
            )}
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
