import React from 'react';
import Section from '@/app/components/organisms/Section/Section';

export default {
  title: 'Organisms/components/Section',
  component: Section,
  argTypes: {
    section: {
      control: 'object',
    },
  },
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  section: {
    bg_color: '#ffffff',
    modular_blocks: [
      {
        title: { text: 'Sample Title' },
        text: null,
        button: null,
      },
      {
        title: null,
        text: { text: 'Sample text content.' },
        button: null,
      },
      {
        title: null,
        text: null,
        button: { title: 'Click Me', variant: 'outline', onClick: () => alert('Button clicked!') },
      },
    ],
  },
};

export const WithDifferentBackground = Template.bind({});
WithDifferentBackground.args = {
  section: {
    bg_color: '#f0f0f0',
    modular_blocks: [
      {
        title: { text: 'Another Title' },
        text: null,
        button: null,
      },
      {
        title: null,
        text: { text: 'Another text content.' },
        button: null,
      },
      {
        title: null,
        text: null,
        button: { title: 'Press Me', variant: 'default', onClick: () => alert('Button pressed!') },
      },
    ],
  },
};