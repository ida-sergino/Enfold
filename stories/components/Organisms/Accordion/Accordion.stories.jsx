import React from 'react';
import { Meta, Story } from '@storybook/react';
import Accordion from '@/app/components/organisms/Accordion/Accordion';

export default {
  title: 'Organisms/components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Accordion Title 1', content: 'This is the content of the first accordion.' },
    { title: 'Accordion Title 2', content: 'This is the content of the second accordion.' },
    { title: 'Accordion Title 3', content: 'This is the content of the third accordion.' },
  ],
};