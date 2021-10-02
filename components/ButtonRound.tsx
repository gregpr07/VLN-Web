import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  action?: () => void;
  Icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const ButtonRound = ({ action, text, className, Icon, ...props }: btnProps) => (
  <button
    onClick={action}
    {...props}
    className={
      "bg-white leading-4 text-black h-9 px-6 py-1 rounded-full font-normal block text-sm focus:outline-black shadow" +
      " " +
      className
    }
  >
    <div className="flex flex-row content-center">
      <p className="font-normal">{text}</p>
      {Icon && (
        <Icon className="h-4 w-4 ml-1 text-black block" aria-hidden="true" />
      )}
    </div>
  </button>
);

export default ButtonRound;
