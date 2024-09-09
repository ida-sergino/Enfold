import React from 'react';
import HeroBanner from '@/app/components/organisms/HeroBanner/HeroBanner';

export default {
  title: 'Organisms/components/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  argTypes: {
    hero_banner: {
      control: 'object',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'image'],
      },
    },
  },
};

const Template = (args) => <HeroBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hero_banner: {
    banner_title: 'Primary Banner',
    banner_description: 'This is a primary banner description.',
    call_to_action: {
      title: 'Learn More',
      href: '/primary',
    },
  },
  variant: 'primary',
};