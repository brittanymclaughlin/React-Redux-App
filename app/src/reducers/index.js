import {
    UPDATE_TITLE,
    TOGGLE_EDITING,
    FETCHING_ANIMAL_START,
    FETCHING_ANIMAL_SUCCESS,
    FETCHING_ANIMAL_ERROR
  } from "../actions";
  
  const initialState = {
    title: "Random Dogs!",
    editing: false,
    isFetching: false,
    error: "",
    dogs: ""
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      case FETCHING_ANIMAL_START:
        console.log("fetching a new joke");
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_ANIMAL_SUCCESS:
        return { ...state, dog: action.payload, isFetching: false };
      case FETCHING_ANIMAL_ERROR:
        return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
    }
  };
  