import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../assets/UserReducer";

export default function Home() {
  let navigate = useNavigate();


    useEffect(() => {
      if (localStorage.getItem("token")) {
        // getNotes();
      } else {
        navigate("/login");
      }
      // eslint-disable-next-line
    }, []);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

const handleDelete = (id) =>{
  dispatch(deleteUser({id:id}))
}

  return (
    <div className="container ">
      <h2>Crud App with Json Server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>gender</th>
            <th>Course</th>
            <th>Created date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobileNo}</td>
              <td>{user.designation}</td>
              <td>{user.gender}</td>
              <td>{user.course}</td>
              <td>{user.createdDate}</td>

              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
