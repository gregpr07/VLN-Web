import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  action?: () => void;
}

const LoadMoreButton = ({
  action,
  text,
  className,
  ...otherProps
}: btnProps) => (
  <div className={"flex flex-row justify-center pt-6" + ` ${className}`}>
    <button
      className="py-3 px-6 bg-gray-50 hover:bg-gray-100 rounded text-sm text-gray-700 font-medium"
      {...otherProps}
    >
      <p className="font-normal">{text}</p>
    </button>
  </div>
);

export default LoadMoreButton;
