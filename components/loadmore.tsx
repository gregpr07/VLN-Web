import React from "react";

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  action?: () => void;
}

const LoadMore = ({ action, text, className }: btnProps) => (
  <div className="flex flex-row justify-center pt-6">
    <button className="py-3 px-6 bg-gray-50 rounded text-sm text-gray-700 font-medium">
      <p className="font-normal">{text}</p>
    </button>
  </div>
);

export default LoadMore;
