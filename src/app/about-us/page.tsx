import React from 'react';
import AboutUsPage from '@/features/AboutUs/AboutUsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании',
};

const AboutUs = () => {
  return <AboutUsPage />;
};

export default AboutUs;
