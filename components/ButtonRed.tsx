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
      "bg-red-600 hover:bg-red-500 leading-4 text-white h-10 px-7 rounded-md font-normal block text-sm" +
      " " +
      className
    }
  >
    <div className="flex flex-row content-center justify-center">
      <p className="font-semibold">{text}</p>
      {Icon && (
        <Icon
          className="h-5 w-5 ml-1 pb-0.5 text-white block"
          aria-hidden="true"
        />
      )}
    </div>
  </button>
);

export default ButtonRed;
