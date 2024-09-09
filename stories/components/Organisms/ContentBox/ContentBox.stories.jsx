import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContentBox from '@/app/components/organisms/ContentBox/ContentBox';

export default {
  title: 'Organisms/components/ContentBox',
  component: ContentBox,
  tags: ['autodocs'],
};

const Template = (args) => <ContentBox {...args} />;

export const DefaultLeft = Template.bind({});
DefaultLeft.args = {
  ContentBox: {
    image_alignment: 'Left',
    title_h2: 'Sample Title',
    description: 'This is a sample description.',
    call_to_action: {
      href: 'https://example.com',
      title: 'Click Here',
    },
    imageConnection: {
      edges: [
        {
          node: {
            url: 'https://via.placeholder.com/150',
            filename: 'placeholder-image.jpg',
            $: {
              url: {},
            },
          },
        },
      ],
    },
  },
  ref: React.createRef(),
};

export const DefaultRight = Template.bind({});
DefaultRight.args = {
  ContentBox: {
    image_alignment: 'Right',
    title_h2: 'Sample Title',
    description: 'This is a sample description.',
    call_to_action: {
      href: 'https://example.com',
      title: 'Click Here',
    },
    imageConnection: {
      edges: [
        {
          node: {
            url: 'https://via.placeholder.com/150',
            filename: 'placeholder-image.jpg',
            $: {
              url: {},
            },
          },
        },
      ],
    },
  },
  ref: React.createRef(),
};