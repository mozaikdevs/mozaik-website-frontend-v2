import React from 'react';
import CustomNavbar from '@/components/CustomNavbar';
import CustomFooter from '@/components/CustomFooter';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <CustomNavbar/>
      <main>{children}</main>
      <CustomFooter/>
    </>
  );
};

export default CustomLayout;
