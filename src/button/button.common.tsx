const small = {
  height: "42px",
  width: "144px",
  fontSize: "16px",
  padding: "10px"
};

const medium = {
  height: "60px",
  width: "144px",
  fontSize: "16px",
  padding: "10px"
};

const large = {
  height: "72px",
  width: "144px",
  fontSize: "16px",
  padding: "10px"
};

export const getButtonHeight = (size: string): string => {
  return size === "small"
    ? small.height
    : size === "medium"
    ? medium.height
    : large.height;
};

export const getButtonWidth = (size: string): string => {
  return size === "small"
    ? small.width
    : size === "medium"
    ? medium.width
    : large.width;
};

export const getButtonFontSize = (size: string): string => {
  return size === "small"
    ? small.fontSize
    : size === "medium"
    ? medium.fontSize
    : large.fontSize;
};

export const getButtonPadding = (size: string): string => {
  return size === "small"
    ? small.padding
    : size === "medium"
    ? medium.padding
    : large.padding;
};
