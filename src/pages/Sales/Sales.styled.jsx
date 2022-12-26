import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;
