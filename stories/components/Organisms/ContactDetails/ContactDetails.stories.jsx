import React from 'react';
import ContactDetails from '@/app/components/organisms/ContactDetails/ContactDetails';

export default {
  title: 'Organisms/components/ContactDetails',
  component: ContactDetails,
  tags: ['autodocs'],
};

const Template = (args) => <ContactDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  component: {
    contactDetails: {
      locations: [
        {
          location: {
            address: '123 Main St, Anytown, USA',
            email: 'contact@example.com',
            phone: '+1234567890',
          },
        },
        {
          location: {
            address: '456 Elm St, Othertown, USA',
            email: 'support@example.com',
            phone: '+0987654321',
          },
        },
      ],
    }
  },
  inView: true,
};