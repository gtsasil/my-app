import axions from "axios";
import { GET_ERRORS } from "./Types";
import Axios from "axios";

export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await Axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
