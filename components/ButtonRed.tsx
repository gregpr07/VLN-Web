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
      "bg-red-600 leading-4 text-white h-8 px-10 rounded-md font-normal block text-xs" +
      " " +
      className
    }
  >
    <div className="flex flex-row content-center">
      <p className="font-normal">{text}</p>
      {Icon && (
        <Icon
          className="h-4 w-4 ml-1 text-white block animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  </button>
);

export default ButtonRed;
