import React from 'react'

// Define a type that includes only the keys present in `styles`
type ElementTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  children: React.ReactNode;
  element?: ElementTypes;
  fontWeight?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, element: element = 'h2', fontWeight, className}) => {
  const styles = {
    h1: `${fontWeight} tracking-tight text-4xl sm:text-4xl md:text-4xl lg:text-5xl lg:leading-tight mt-0 mb-4`,
    h2: `${fontWeight} tracking-tight text-3xl sm:text-3xl md:text-3xl leading-relaxed mt-0 mb-4`,
    h3: `${fontWeight} tracking-tight text-xl sm:text-xl md:text-2xl leading-relaxed mt-0 mb-1`,
    h4: `${fontWeight} tracking-tight text-l sm:text-l md:text-xl leading-relaxed mt-0 mb-1`,
    h5: `${fontWeight} tracking-tight text-l sm:text-l md:text-xl leading-relaxed mt-0 mb-1`,
    h6: `${fontWeight} tracking-tight text-l sm:text-base md:text-base leading-relaxed mt-0 mb-1`
  }

  return (
    <>
      {React.createElement(element, { className: `${styles[element]}${className ? " " + className : ""}` }, children)}
    </>
  )
}

export default Title
