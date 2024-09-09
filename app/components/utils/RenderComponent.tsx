import React from 'react';

interface RenderComponentProps {
  component: React.ComponentType<any>;
  [key: string]: any; // Allow any additional props
}

const RenderComponent: React.FC<RenderComponentProps> = ({ component: Component, ...props }) => {
  return <Component {...props} />;
};

export default RenderComponent;