import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/LocalStorageUtils";

const getInitialState = (): UserState[] => {
  const userState: UserState[] = loadState("users");

  if (userState) {
    return userState;
  }

  // If no valid stored state, return the default initial state
  return [
    {
      id: "nWpWES-vFw1uSdeB9oVd3",
      name: "Yuusuf Muhammad",
      roleId: "nWpZU0-vFw1uSdeB9oVd3",
      email: "yuusuf@mail.com",
      password:
        "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f",
    },
    {
      id: "nWpWES-vFw1ujfEW9oVd3",
      name: "Aadam Muslih",
      roleId: "nWpZU0-vFw1uSdeB9oVd3",
      email: "muslih@mail",
      password:
        "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f",
    },
    {
      id: "nWSder-vFw1uSdeB9oVd3",
      name: "Oyekola Toheeb",
      roleId: "nWpZU0-vFe4uSdeB9oVd3",
      email: "toheeb@mail.com",
      password:
        "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f",
    },
  ];
};

interface UserState {
  id: string;
  roleId: string;
  name: string;
  email: string;
  password: string;
}

const initialState: UserState[] = getInitialState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      action.payload.id = nanoid();
      state.push(action.payload);
      saveState("users", state);
    },
    updateUser(state, action) {
      const user = state.find((user) => user.id == action.payload.id);
      if (user) {
        user.name = action.payload.name;
      }
      saveState("users", state);
    },
    deleteUser(state, action) {
      const user = state.find((user) => user.id == action.payload.id);
      console.log(user);
      if (user) {
        const newState = state.filter((user) => user.id != action.payload.id);
        saveState("users", newState);
        return newState;
      }
    },
  },
});

export const getAllUsers = (state: { users: UserState[] }) => state.user;

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
