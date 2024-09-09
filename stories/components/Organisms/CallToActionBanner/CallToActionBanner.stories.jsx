import React from 'react';
import CallToActionBanner from '@/app/components/organisms/CallToActionBanner/CallToActionBanner';

export default {
  title: 'Organisms/components/CallToActionBanner',
  component: CallToActionBanner,
  tags: ['autodocs'],
};

const Template = (args) => <CallToActionBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  callToActionBanner: {
    call_to_action_banner: {
      title: 'Join Us Today!',
      text: 'Become a part of our amazing community and enjoy exclusive benefits.',
      button: {
        label: 'Click Me',
        href: '/action',
      },
    },
  },
  inView: true,
};