import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useContext } from "react";
import { FormContext } from "../form/Form";
import "../../src/styles.css";
import { BiInfoCircle } from "react-icons/bi";

interface IFormOptionProps {
  options: { label: string; value: string }[];
  width: string;
  label?: string;
  name: string;
  labelRequired?: boolean;
}

export const FormOption = ({ name, options, ...props }: IFormOptionProps) => {
  const { values, setValues, errors }: any = useContext(FormContext);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div>
      <div className="form__option">
        <label className="form__label">{props?.label}</label>
        <div className="form__star">{props.labelRequired && "*"}</div>
      </div>
      <div style={{ width: `${props?.width}` }}>
        <Select
          name={name}
          value={values[name]}
          onChange={handleSelectChange}
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#F8F8F8",
            borderRadius: "8px"
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errors[name] && (
          <p style={{ ...style }}>
            <BiInfoCircle />
            {errors[name]}
          </p>
        )}
      </div>
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
