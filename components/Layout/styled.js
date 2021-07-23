import styled, { css } from 'styled-components';
import VARIABLES from '../../themes/variables';

// Wrapper
// ============================================================
export const LayoutStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  background-color: ${VARIABLES.COLOR.MAIN_BACKGROUND};
  flex-direction: column;
  width: 100%;
  /* flex-wrap: wrap; */
  height: 100vh;

  /* Child element styles
  ------------------------------- */
  .main {
    /* ${(props) => {
      return css`
        max-height: ${`${props.bodyHeight}px`};
      `;
    }} */
    background-color: ${VARIABLES.COLOR.MAIN_BACKGROUND};
    flex: 1 1 auto;
    display: flex;
    height: auto;
  }

  .main-content-wrapper {
    padding: 0px 60px 16px;
    background-color: ${VARIABLES.COLOR.MAIN_BACKGROUND};
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    max-width: calc((100%));
    height: auto;
  }

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
  @media (max-width: 1440.98px) {
    .main {
      max-height: calc((100% - ${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT_SM}));
    }

    .main-content-wrapper {
      max-width: calc((100%));
      padding: 0px 35px 16px;
    }
  }

  @media (max-width: 1280.98px) {
    .main {
      max-height: calc((100%-${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT_XS}));
    }

    .main-content-wrapper {
      max-width: calc((100%));
      padding: 0px 25px 16px;
    }
  }

  @media (max-width: 1024.98px) {
    .main {
      max-height: calc((100% - ${VARIABLES.ELEMENTSSIZE.NAVBAR_HEIGHT_XXS}));
    }

    .main-content-wrapper {
      max-width: calc((100vw));
      padding: 0px 25px;
    }
  }

  /* State
  ------------------------------- */
  /* &.main {
    ${(props) => {
    return css`
      max-height: ${`${props.bodyHeight}px`};
    `;
  }}
  } */
`;
