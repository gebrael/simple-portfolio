import React, { useState } from "react";
import "./input.css";

const Input = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const valid = () => {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="input-group-xl form">
      <div className="fade-text">
        {value != "" ? <h5>{props.label}</h5> : ""}
      </div>
      {props.type === "textArea" ? (
        <textarea
          className="form-control py-3 border-0 shadow-none border-bottom mb-3 "
          placeholder={props.label}
          rows="3"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      ) : (
        <>
          <input
            type={props.type}
            className={`form-control py-3 border-0 shadow-none border-bottom mb-3 ${
              props.type === "Email" ? (isValid ? "" : "alert-danger ") : ""
            }`}
            placeholder={props.label}
            onChange={(e) => {
              setValue(e.target.value);
              setIsValid(props.type == "Email" ? valid(e.target.value) : true);
            }}
          />
          {!isValid && props.type === "Email" && (
            <h6 className="text-danger text-uppercase">email is not valid!</h6>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
