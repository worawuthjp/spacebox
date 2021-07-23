import styled from 'styled-components';
import VARIABLES from 'themes/variables';

// Wrapper
// ============================================================
export const NavbarStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  width: 100%;
  height: ${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT};
  box-shadow: 3px 0 9px ${VARIABLES.COLOR.SHADOW_A};
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: absolute;

  /* Child element styles
  ------------------------------- */
  .left-section {
    display: flex;
    align-items: center;
    padding-left: ${VARIABLES.MARGINGPADDINGSIZE.PADDINGLEFT};
    width: ${VARIABLES.ELEMENTSSIZE.SIDEBAR_WIDTH};
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .dropdown {
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: ${VARIABLES.COLOR.BLACK};
    padding-right: ${VARIABLES.MARGINGPADDINGSIZE.PADDINGRIGHT};
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${VARIABLES.COLOR.WHITE};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: ${VARIABLES.COLOR.BLACK};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .ml-1 {
    margin-left: ($spacer * 0.25) !important;
  }

  .ml-2 {
    margin-left: ($spacer * 0.5) !important;
  }

  .mr-1 {
    margin-right: ($spacer * 0.25) !important;
  }

  .mr-2 {
    margin-right: ${VARIABLES.MARGINGPADDINGSIZE.MARGINRIGHT} !important;
  }

  .pr-2 {
    padding-right: ${VARIABLES.MARGINGPADDINGSIZE.PADDINGRIGHT} !important;
  }

  .pl-2 {
    padding-left: ${VARIABLES.MARGINGPADDINGSIZE.PADDINGLEFT} !important;
  }

  .nav-link:hover {
    color: ${VARIABLES.COLOR.GRAY_9};
  }

  .navbar-logo {
    width: 84px;
  }

  .right-section {
    align-items: center;
    display: flex;
    margin-right: 50px;

    .user-nav {
      flex-direction: column;
      color: ${VARIABLES.COLOR.PRIMARY};
      font-weight: ${VARIABLES.TYPOGRAPHYS.FONT_WEIGHT.SUKHUMVIT_BOLD};
      margin-right: 64px;

      .user-name {
        justify-content: center;
        text-align: center;
      }

      .user-role {
        justify-content: center;
        text-align: center;
      }
    }

    .logout {
      width: 24px;
      cursor: pointer;
    }
  }

  /* Modifiers
  ------------------------------- */

  /* State
  ------------------------------- */

  /* Media queries
  ------------------------------- */
  @media (max-width: 1440.98px) {
    height: ${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT_SM};

    .navbar-logo {
      width: 65px;
    }

    .right-section {
      .logout {
        width: 20px;
      }

      .user-nav {
        margin-right: 50px;
      }
    }
  }

  @media (max-width: 1280.98px) {
    height: ${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT_XS};
  }

  @media (max-width: 1024.98px) {
    height: ${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT_XXS};
  }
`;
