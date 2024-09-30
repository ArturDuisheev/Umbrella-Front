'use client';
import React, { useMemo } from 'react';
import './ServiceTabs.scss';
import { Box, Tab, Tabs } from '@mui/material';
import CustomTabPanel from '@/features/Service/ServiceTabs/components/CustomTabPanel/CustomTabPanel';

import Team from '@/features/Service/ServiceTabs/components/Team/Team';
import WorkStartSteps from '@/features/Service/ServiceTabs/components/WorkStartSteps/WorkStartSteps';
import {
  BeforeStartJob,
  IProcess,
  ParamsPageService,
  Portfolio,
  Section,
  TabProps,
  TeamMember,
} from '../../../../types';
import Process from '@/features/Service/ServiceTabs/components/Process/Process';
import { useRouter } from 'next/navigation';

interface Props {
  tabs: TabProps[];
  params: ParamsPageService;
}

const ServiceTabs: React.FC<Props> = ({ tabs, params }) => {
  const useRouterAPI = useRouter();

  const [selectedTabId, setSelectedTabId] = React.useState<string>('');
  const [selectedTab, setSelectedTab] = React.useState<TabProps | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    useRouterAPI.push(`/service/${params.id}/${newValue}`, {
      scroll: false,
    });
    setSelectedTabId(newValue);
    const matchItem = tabs.find((item) => item.id === Number(newValue));
    if (matchItem) {
      setSelectedTab(matchItem);
    }
  };

  function a11yProps(id: number) {
    return {
      id: `scrollable-auto-tab-${id}`,
      'aria-controls': `scrollable-auto-tabpanel-${id}`,
    };
  }

  useMemo(() => {
    if (tabs && tabs.length && !selectedTab) {
      const matchTab = tabs.find((item) => item.id === Number(params.tab));
      if (matchTab) {
        setSelectedTab(matchTab);
      }
      setSelectedTabId(params.tab);
    }
  }, [tabs, selectedTabId, params]);

  return (
    <div className="service-tabs">
      <div className="service-tabs-content">
        <div className="service-tabs-content-box">
          <div className="service-tabs-content-box-inner container">
            <Box>
              <Tabs
                value={selectedTabId}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile={false}
              >
                {tabs?.map((tab: TabProps) => {
                  return (
                    <Tab
                      {...a11yProps(tab.id)}
                      id={`${tab.id}`}
                      value={`${tab.id}`}
                      label={tab.title}
                    />
                  );
                })}
              </Tabs>
            </Box>
          </div>
        </div>

        {!selectedTab ? null : (
          <CustomTabPanel value={selectedTabId} index={`${selectedTabId}`}>
            {selectedTab.sections?.map((section: any, secIndex: number) => {
              return secIndex === 0 ? (
                <div className="service-tabs-content-info container" key={section.id}>
                  <h3 className="service-tabs-content-info-title">{section?.title}</h3>
                  <p className="service-tabs-content-info-text">{section?.description}</p>
                </div>
              ) : (
                <section
                  className="our-approach"
                  key={section.id}
                  style={{ marginBottom: '100px' }}
                >
                  <div className="our-approach-content container">
                    <div className="our-approach-content-wrapper">
                      <h3 className="our-approach-content-wrapper-title">{section?.title}</h3>
                      <p className="our-approach-content-wrapper-text">{section?.description}</p>
                    </div>
                    <div className="our-approach-content-img-box">
                      <img
                        className="our-approach-content-img-box-img"
                        src="/assets/home/our-approach/umrella.svg"
                        alt="Umrella agency"
                      />
                    </div>
                  </div>
                </section>
              );
            })}
            <div className="process-and-team">
              <Process processes={selectedTab.processes} />
              <Team team={selectedTab.team} />
              <WorkStartSteps steps={selectedTab?.before_start_job} />
            </div>
          </CustomTabPanel>
        )}
      </div>
    </div>
  );
};

export default ServiceTabs;
