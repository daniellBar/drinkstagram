import { Control, UseControllerProps } from "react-hook-form";

export type ControlProps = UseControllerProps<Record<string, any>>;

export interface InputProps {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?:number
  info?:string
}

export type ControlledInputProps<T extends Record<string, any>> = {
  control: Control<T>;
} & UseControllerProps<T> &
  InputProps;
