import React, { useContext, useState } from "react";
import BaseInput from "./BaseInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { BiHide, BiInfoCircle, BiShowAlt } from "react-icons/bi";
import { HTMLInputTypeAttribute, SetStateAction } from "react";
import { FormContext } from "../form/Form";
import "../../src/styles.css";

export interface IInputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  variant?: "standard" | "filled" | "outlined" | undefined;
  className?: HTMLInputTypeAttribute;
  onChange?: (e: { target: { value: SetStateAction<string> } }) => void;
  value?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  btn?: boolean;
  name: string;
  width?: string;
  label?: string;
  labelRequired?: boolean;
}

export const FormInput = ({ ...props }: IInputProps) => {
  const { values, setValues, errors }: any = useContext(FormContext);
  const [showPassword, setShowPassword] = useState(true);
  const [type, setType] = useState(props.type);
  const handleChange = (event: any) => {
    setValues({ ...values, [props.name]: event.target.value });
  };
  const handleClick = () => {
    setShowPassword(!showPassword);
    setType(showPassword === true ? "text" : "password");
  };
  return (
    <div>
      <div className="form__option">
        <label className="form__label">{props.label}</label>
        <div className="form__star">{props.labelRequired && "*"}</div>
      </div>
      <BaseInput
        type={type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        variant={props.variant}
        className={props.className ? "error" : ""}
        name={props?.name}
        onChange={handleChange}
        value={values[props.name] || ""}
        required={props.required}
        InputProps={{
          endAdornment: props.btn && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showPassword ? <BiHide /> : <BiShowAlt />}
              </IconButton>
            </InputAdornment>
          )
        }}
        style={{ width: `${props.width}` }}
      />
      {errors[props.name] && (
        <p style={{ ...style }}>
          <BiInfoCircle />
          {errors[props.name]}
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
