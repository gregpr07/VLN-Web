import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  action?: () => void;
  Icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const ButtonBlack = ({ action, text, className, Icon, ...props }: btnProps) => (
  <button
    onClick={action}
    {...props}
    className={
      "bg-black leading-4 text-white py-3 h-12 px-6 rounded-sm font-normal block" +
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

export default ButtonBlack;
