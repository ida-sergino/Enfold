import React from 'react'

// Define a type that includes only the keys present in `styles`
type ElementTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  children: React.ReactNode;
  element?: ElementTypes;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, element: element = 'h2', className}) => {
  const styles = {
    h1: `tracking-tight text-4xl sm:text-4xl md:text-4xl lg:text-5xl lg:leading-tight mt-0 mb-4`,
    h2: `tracking-tight text-3xl sm:text-3xl md:text-3xl lg:text-4xl leading-relaxed mt-0 mb-4`,
    h3: `tracking-tight text-2xl sm:text-2xl md:text-2xl leading-relaxed mt-0 mb-1`,
    h4: `tracking-tight text-l sm:text-l md:text-xl leading-relaxed mt-0 mb-1`,
    h5: `tracking-tight text-l sm:text-l md:text-xl leading-relaxed mt-0 mb-1`,
    h6: `tracking-tight text-l sm:text-base md:text-base leading-relaxed mt-0 mb-1`
  }

  return (
    <>
      {React.createElement(element, { className: `${styles[element]}${className ? " " + className : ""}` }, children)}
    </>
  )
}

export default Title
