import { Box } from '../Box/Box';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInvoices } from 'data/fakeApi';
import { NavItem } from './Invoices.styled';
export const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  console.log(invoices);
  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);
  return (
    <Box display="flex">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        borderRight="1px solid black"
        p={4}
      >
        {invoices.map(({ id }) => (
          <NavItem to={`${id}`} key={id}>
            {id}
          </NavItem>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};
