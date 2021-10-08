import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  action?: () => void;
  textColor?: string;
}

const ButtonlessRed = ({
  action,
  children,
  textColor = "text-red-600",
  className,
  ...props
}: btnProps) => (
  <button
    onClick={action}
    {...props}
    className={"underline font-normal text-sm " + textColor + " " + className}
  >
    {children}
  </button>
);

export default ButtonlessRed;
