import { FC } from 'react';
import ServicePage from '@/features/Service/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги',
};

const Service: FC<{ params: { id: string } }> = ({ params }) => {
  return <ServicePage params={params} />;
};

export default Service;
