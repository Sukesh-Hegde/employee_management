import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload); 
    },
    updateUser: (state, action) => {
      const { id, name, email, mobileNo, designation, gender, course, image } =
        action.payload;
      const userToUpdate = state.find((user) => user.id == id);
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
        userToUpdate.mobileNo = mobileNo;
        userToUpdate.designation = designation;
        userToUpdate.gender = gender;
        userToUpdate.course = course;
        userToUpdate.image = image; 
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id); 
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
