import React, { useState } from "react";
import { toggleEditing, updateTitle } from "../actions";
import { connect } from "react-redux";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = (e) => {
    console.log(e.target.value);
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <i onClick={() => props.toggleEditing()} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              props.updateTitle(newTitleText);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editing: state.editing,
    title: state.title
  };
};

const mapDispatchToProps = { toggleEditing, updateTitle };

export default connect(mapStateToProps, mapDispatchToProps)(Title);