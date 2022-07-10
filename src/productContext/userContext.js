import React, { useReducer } from "react";
import axios from "axios";

export const userContext = React.createContext();

const INIT_STATE = {
  user: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

const LOG_API = "http://localhost:8003/log";
const UserContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createLogIn(dataUser) {
    await axios.post(LOG_API, dataUser);
    getLogIn();
  }

  async function deleteProduct(id) {
    await axios.delete(`${LOG_API}/${id}`);
    getLogIn();
  }

  async function getLogIn() {
    const res = await axios(LOG_API);
    dispatch({
      type: "GET_USER",
      payload: res.data,
    });
    console.log(res);
  }

  return (
    <userContext.Provider
      value={{
        user: state.user,
        createLogIn,
        getLogIn,
        deleteProduct,
      }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvaider;
