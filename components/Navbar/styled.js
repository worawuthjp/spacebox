import styled from 'styled-components';
import variables from 'themes/variables';

export const NavbarStyle = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;

  .nav-mouse:hover {
    color: ${variables.COLOR.GRAY_9};
  }

  .nav-mouse:focus {
    color: ${variables.COLOR.GRAY_9};
  }
`;
