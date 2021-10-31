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
      "bg-black leading-4 text-white py-2 h-10 px-4 rounded-sm font-medium block text-sm" +
      " " +
      className
    }
  >
    <div className="flex flex-row content-center">
      <p className="font-semibold">{text}</p>
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
