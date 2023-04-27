import React, { useContext } from "react";
import { FormContext } from "../form/Form";
import { TextField } from "@mui/material";
import "../../src/styles.css";
import { BiInfoCircle } from "react-icons/bi";

interface IFormTextInputProps {
  name: string;
  label?: string;
  labelRequired?: boolean;
  width?: string;
  placeholder?: string;
}

export const FormTextInput = ({ name, ...props }: IFormTextInputProps) => {
  const { values, setValues, errors }: any = useContext(FormContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div>
      <div className="form__option">
        <label className="form__label">{props?.label}</label>
        <div className="form__star">{props.labelRequired && "*"}</div>
      </div>
      <TextField
        name={name}
        value={values[name]}
        onChange={handleInputChange}
        style={{ width: `${props.width}` }}
        placeholder={props.placeholder}
      />
      {errors[name] && (
        <p style={{ ...style }}>
          <BiInfoCircle />
          {errors[name]}
        </p>
      )}
    </div>
  );
};

const style = {
  margin: "0px 0px",
  marginTop: "4px",
  color: "#B3261E",
  fontFamily: "Lato",
  fontWeight: "400",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "5px"
};
