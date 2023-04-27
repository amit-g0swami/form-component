import Button from "@mui/material/Button";
import {
  getButtonFontSize,
  getButtonHeight,
  getButtonPadding,
  getButtonWidth
} from "./button.common";
import React from "react";

interface IButtonCommonProps {
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disable?: boolean;
  onClick: () => void;
  size: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  name: string;
  value: string;
  variant?: "text" | "outlined" | "contained";
  className?: string;
  styles?: string;
}
export interface IButtonProps extends IButtonCommonProps {
  btnText: string;
}

export const DefaultButton: React.FC<IButtonProps> = ({
  ...props
}: IButtonProps) => {
  return (
    <Button
      sx={{
        height: getButtonHeight(props.size),
        width: getButtonWidth(props.size),
        padding: getButtonPadding(props.size),
        fontSize: getButtonFontSize(props.size),
        "&:focus": {
          backgroundColor: `${props.color}.main`,
          color: `${props.color}.light`
        },
        "&.Mui-disabled": {
          borderColor: `${props.color}.light`,
          color: `${props.color}.light`,
          cursor: "not-allowed"
        }
      }}
      variant={props.variant ?? "outlined"}
      color={props.color ?? "primary"}
      size="large"
      disabled={props.disable ?? false}
      onClick={props.onClick}
      name={props.name}
      type={props.type ?? "button"}
      value={props.value}
    >
      {props.btnText}
    </Button>
  );
};
