'use client';
import { FC, useEffect } from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Footer from '@/UI/Footer/Footer';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectServicePage } from '@/features/Service/serviceSlice';
import { fetchServicePage } from '@/features/Service/serviceThunk';
import { ParamsPageService } from '../../../types';

type Props = {
  params: ParamsPageService;
};

const ServicePage: FC<Props> = ({ params }) => {
  const dispatch = useAppDispatch();
  const servicePage = useAppSelector(selectServicePage).filter(
    (service) => service?.id === Number(params.id),
  );

  useEffect(() => {
    dispatch(fetchServicePage());
  }, [dispatch]);

  return (
    <>
      <Main
        title={servicePage[0]?.title}
        short_description_for_banner={servicePage[0]?.short_description_for_banner}
        gif={servicePage[0]?.gif}
      />
      {/* 
      TODO: Refactor types
      @ts-ignore */}
      <ServiceTabs tabs={servicePage[0]?.tabs} params={params} />
      <Footer />
    </>
  );
};

export default ServicePage;
