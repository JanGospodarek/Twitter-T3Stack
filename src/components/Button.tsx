import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ small, gray, className = "", ...props }: ButtonProps) => {
  return <button {...props}></button>;
};
export default Button;
