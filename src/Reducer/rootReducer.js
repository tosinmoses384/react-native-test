import { PostData } from "../Api/post";

const initialState = {
  email: "",
  password: "",
  list: {}
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
    case "submit":
      PostData(payload);
      break;
    default:
      return state;
  }
};
