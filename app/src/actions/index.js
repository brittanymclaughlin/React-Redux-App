import axios from "axios";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_ANIMAL_START = "FETCHING_ANIMAL_START";
export const FETCHING_ANIMAL_SUCCESS = "FETCHING_ANIMAL_SUCCESS";
export const FETCHING_ANIMAL_ERROR = "FETCHING_ANIMAL_ERROR";

export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}

export const updateTitle = (newTitle) => {
  return { type: UPDATE_TITLE, payload: newTitle };
};

const headers = {
  Accept: "application/json"
};

export const getANIMAL = () => (dispatch) => {
  console.log("getAnimalaction");
  dispatch({ type: FETCHING_ANIMAL_START });
  axios
    .get("https://dog.ceo/api/breeds/image/random", { headers: headers })
    .then((res) => {
      dispatch({ type: FETCHING_ANIMAL_SUCCESS, payload: res.data.message });
      console.log("API Response: ", res);
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_ANIMAL_ERROR,
        payload: `${err.response.message} code: ${err.response.code}`
      });
      console.log(err);
    });
};