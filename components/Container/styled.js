import styled from 'styled-components';
//import VARIABLES from '../../themes/variables'

// Wrapper
// ============================================================
export const ContainerStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  flex: 1 1 auto;

  /* Child element styles
  ------------------------------- */

  /* Modifiers
  ------------------------------- */

  &.is-fluid {
    max-width: none;
  }

  &.is-full-height {
    min-height: 100%;
  }

  &.is-align-center {
    align-items: center;
  }

  &.is-justify-center {
    justify-content: center;
  }

  /* State
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;
