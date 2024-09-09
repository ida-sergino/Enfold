import React from 'react';
import Navbar from '@/app/components/page/layout/Navbar/Navbar';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Organisms/layout/Navbar',
  component: Navbar,
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const Default = {
  args: {
    mobileMenuOpen: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const MobileMenu = {
  args: {
    mobileMenuOpen: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};