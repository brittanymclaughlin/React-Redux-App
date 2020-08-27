import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getANIMAL } from "../actions";

const Dog = ({ getANIMAL, dog, isFetching }) => {
  useEffect(() => {
    getANIMAL();
  }, [getANIMAL]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <img src={dog} alt="Doggie Pictures"/><br/>
      <button onClick={getANIMAL}>Get new dog</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { dog: state.dog, isFetching: state.isFetching };
};

const mapDispatchToProps = { getANIMAL };

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
