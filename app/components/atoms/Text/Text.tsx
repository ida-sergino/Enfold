import React from "react";
import parse from 'html-react-parser';

interface TextProps {
  children?: React.ReactNode;
  className?: string;
}

const defaultStyles = "text-l leading-relaxed";

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <span className={`
      ${defaultStyles}
      ${className ? " " + className : ""
      }`}
    >
      {parse(children?.toString() || "")}
    </span>
  );
};

export default Text;
