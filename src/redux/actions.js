import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchLorem = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_START });

    try {
      const response = await axios.get(
        "https://api.lorem.com/ipsum"
      );

      dispatch({
        type: FETCH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};
