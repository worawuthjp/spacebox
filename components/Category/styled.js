import styled from 'styled-components';
import variables from '../../themes/variables';

export const CategoryStyle = styled.div`
  /* display: flex; */

  .column {
    float: left;
    width: calc((23.57%-${variables.MARGINGPADDINGSIZE.MARGINRIGHT}));
    margin-right: ${variables.MARGINGPADDINGSIZE.MARGINRIGHT};
    padding: 10px;
    height: 350px; /* Should be removed. Only for demonstration */
  }

  /* Clear floats after the columns */

  .row {
    width: auto;
  }
  .row:after {
    content: '';
    display: table;

    clear: both;
  }

  .text-center {
    text-align: center;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mr-auto {
    margin-right: auto;
  }

  .mt-2 {
    margin-top: '20px';
  }

  .border {
    border-style: solid;
    border-radius: 3%;
    border-width: thin;
    border-color: ${variables.COLOR.GRAY_4};
  }
`;
