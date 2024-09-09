import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  title?: string;
  href?: string; // Add the href property
  variant?: keyof typeof variants.variant;
  size?: keyof typeof variants.size;
  className?: string;
  action?: () => void;
}

const variants = {
  variant: {
    default: "transition ease-in-out delay-150 bg-primary text-black hover:scale-105 rounded-xl",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-xl",
    secondary: "bg-secondary text-black hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2 w-full max-w-[200px]",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

const defaultVariants = {
  variant: "default",
  size: "default",
};

const Button: React.FC<ButtonProps> = ({ children, title = "Button", href = "#", variant = "default", size = "default", action, className }) => {
  const handleClick = () => {
    {href ? window.location.href = href : action()}
  };

  const variantClasses = variants.variant[variant];
  const sizeClasses = variants.size[size];
  const combinedClasses = `${variantClasses} ${sizeClasses} ${className || ''}`;

  return (
    <button
      onClick={handleClick}
      className={combinedClasses}
      style={{ display: title ? '' : 'none' }}
    >
      {children}
    </button>
  );
}

export default Button;