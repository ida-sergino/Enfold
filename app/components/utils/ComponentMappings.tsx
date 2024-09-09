const dynamicMapper = (component: any) => {
  const typename = component.__typename;
  let name = typename;

  // Check if typename starts with 'PagePageComponents'
  if (typename.startsWith('PagePageComponents')) {
    name = typename.replace('PagePageComponents', '');
  }

  // Check if typename is 'CaseModularBlocksSection'
  if (typename.startsWith('CaseModularBlocks')) {
    name = typename.replace('CaseModularBlocks', '');
  }

  // Create a new object excluding the __typename key
  const { __typename, ...restProps } = component;

  return {
    name,
    ...restProps,
  };
};

export const mapComponents = (components: any[]) => {
  return components.map((component: any) => dynamicMapper(component)).filter(Boolean);
};