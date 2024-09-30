'use client';
import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children?: React.ReactNode;
  index: string;
  value: string;
}

const CustomTabPanel: React.FC<Props> = ({ children, index, value, ...other }) => {
  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
};

export default CustomTabPanel;
