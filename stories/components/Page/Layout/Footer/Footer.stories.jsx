import React from 'react';
import Footer from '@/app/components/layout/Footer/Footer';

export default {
  title: 'Organisms/layout/Footer',
  component: Footer,
  argTypes: {
    navigation: {
      control: 'object',
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  navigation: [
    { title: 'Privacy policy', href: '/privacy-policy' },
    { title: 'Terms and conditions', href: '/terms-and-conditions' },
    { title: 'Contact', href: '/contact' },
  ],
};