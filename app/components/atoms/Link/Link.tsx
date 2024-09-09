import React from "react";

const Link: React.FC<{children: React.ReactNode, href: string, className?: string,}> = ({ children, href, className }) => {
  
  return (
    <a href={href} className={`text-md leading-6 text-gray-900 cursor-pointer ${className}`}>
      {children}
    </a>
  );
}

export default Link;
