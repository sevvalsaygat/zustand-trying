import React from "react";

type ButtonPropTypes = {
  content: string;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  content,
  type = "button",
  onClick,
  className,
}: ButtonPropTypes) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {content}
    </button>
  );
};

export default Button;
