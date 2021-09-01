import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  action?: () => void;
}

const ButtonlessRed = ({ action, children, className, ...props }: btnProps) => (
  <button
    onClick={action}
    {...props}
    className={"text-red-600 underline font-normal text-xs" + " " + className}
  >
    {children}
  </button>
);

export default ButtonlessRed;
