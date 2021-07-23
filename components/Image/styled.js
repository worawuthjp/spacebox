import styled from 'styled-components';
import VARIABLES from '../../themes/variables';

// Wrapper
// ============================================================
export const ImageStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  width: 100%;
  height: auto;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;

  /* Child element styles
  ------------------------------- */
  .image {
    width: auto;
    height: 25em;
  }

  /* Modifiers
  ------------------------------- */
  &.is_circle {
    border-radius: 50%;
    overflow: hidden;
  }

  &.page-title-icon {
    background-color: ${VARIABLES.COLOR.PRIMARY};
    width: 60px;
    height: 60px;

    .image {
      width: 36px;
    }
  }

  /* State
  ------------------------------- */

  /* Media queries
  ------------------------------- */
  @media (max-width: 1440.98px) {
    &.page-title-icon {
      width: 50px;
      height: 50px;

      .image {
        width: 26px;
      }
    }
  }

  @media (max-width: 1280.98px) {
    &.page-title-icon {
      width: 40px;
      height: 40px;

      .image {
        width: 20px;
      }
    }
  }

  @media (max-width: 1024.98px) {
    &.page-title-icon {
      width: 30px;
      height: 30px;

      .image {
        width: 15px;
      }
    }
  }
`;

export const ImageButtonStyle = styled.button`
  /* Parent styles
  ------------------------------- */
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  /* Child element styles
  ------------------------------- */
  .image {
    width: 100%;
    height: auto;
  }

  /* Modifiers
  ------------------------------- */
  &.is_circle {
    border-radius: 50%;
    overflow: hidden;
  }

  &.page-title-icon {
    background-color: ${VARIABLES.COLOR.PRIMARY};
    width: 60px;
    height: 60px;

    .image {
      width: 36px;
    }
  }

  /* State
  ------------------------------- */
  &:hover {
    filter: brightness(1.2);
  }

  /* Media queries
  ------------------------------- */
  @media (max-width: 1440.98px) {
  }

  @media (max-width: 1280.98px) {
  }

  @media (max-width: 1024.98px) {
  }
`;
