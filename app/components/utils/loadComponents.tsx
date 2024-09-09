const requireComponent = require.context(
  '../', // The relative path of the components folder
  true, // Whether or not to look in subfolders
  /\/(atoms|molecules|organisms)\/[^_][\w-]+\/[^_][\w-]+\.tsx$/ // The regular expression to match component filenames
);

export const loadComponents = () => {
  const components: { [key: string]: any } = {};

  requireComponent.keys().forEach((fileName) => {
    const componentName = fileName
      .split('/')
      .slice(-2, -1)[0]; // Get the second last part of the path, which is the component name
    if (componentName) {
      components[componentName] = requireComponent(fileName).default;
    }
  });

  return components;
};