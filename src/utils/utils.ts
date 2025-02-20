import { SxProps, Theme } from "@mui/material";

export const parseSx = (sx?: SxProps<Theme>) => {
  return Array.isArray(sx) ? sx : [sx];
};

export const generateMockId = (length: number = 8): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
