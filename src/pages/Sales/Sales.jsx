import { Box } from 'components/Box/Box';
import { NavItem } from './Sales.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];
export const Sales = () => {
  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header" borderBottom="1px solid black" p={4}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <li key={href}>
              <NavItem to={href}>{text}</NavItem>
            </li>
          ))}
        </Box>
      </Box>
      <Suspense fallback={<h1>Download</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
