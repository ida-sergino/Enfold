import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width = 100, height = 100, className }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
};

export default Image;