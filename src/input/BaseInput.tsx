import TextField, { TextFieldProps } from "@mui/material/TextField";
import styled from "@emotion/styled";
import React from "react";

const BaseInput = styled((props: TextFieldProps) => <TextField {...props} />)(
  () => ({
    "& .MuiOutlinedInput-root": {
      width: "auto",
      background: "#ffff",
      borderRadius: "8px",
      backgroundColor: "#F8F8F8;",
      "& fieldset": {},
      "&:hover fieldset": {
        border: "1px solid #BDBDBD"
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #33050C"
      },
      "&.Mui-disabled": {
        background: "rgba(245, 245, 245, 0.25)"
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        border: "1px solid rgba(189, 189, 189, 0.25)",
        background: "none"
      }
    }
  })
);

export default BaseInput;
