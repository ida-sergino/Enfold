import React from 'react';
import ImportedComponents from '@/app/components/_index';
import RenderComponent from './RenderComponent';

interface ComponentProps {
  [key: string]: React.ElementType;
  component: React.ElementType;
}

interface ComponentsType {
  [key: string]: React.ElementType;
}

function ComponentList({ componentList }: { componentList: any[] }) {
  const Components: ComponentsType = ImportedComponents;
  
  return (
    <>
      {componentList.map((comp, index) => {
        const Component = Components[comp.name];
        if (!Component) {
          console.error(`Component ${comp.name} not found in Components`);
          return null;
        }
        return (
          <RenderComponent 
              key={index} 
              component={Component} 
              {...comp} 
            />
        );
      })}
    </>
  );
}

export default ComponentList;