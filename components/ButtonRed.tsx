import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  action?: () => void;
  Icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const ButtonRed = ({ action, text, className, Icon, ...props }: btnProps) => (
  <button
    onClick={action}
    {...props}
    className={
      "bg-red-600 leading-4 text-white h-10 px-7 rounded-md font-normal block text-sm" +
      " " +
      className
    }
  >
    <div className="flex flex-row content-center justify-center">
      <p className="font-normal">{text}</p>
      {Icon && (
        <Icon className="h-4 w-4 ml-1 text-white block" aria-hidden="true" />
      )}
    </div>
  </button>
);

export default ButtonRed;
