import { createGlobalStyle } from 'styled-components';
import VARIABLES from '../themes/variables';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Globalstyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${VARIABLES.TYPOGRAPHYS.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 17px;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, :before, :after {
    box-sizing: border-box;
    font-family: ${VARIABLES.TYPOGRAPHYS.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .flex {
    display: flex;
  }

  .mouse-pointer :hover {
    cursor: pointer;
    color: ${VARIABLES.COLOR.GRAY_9};
    filter: brightness(0.8);
  }

  .break-word {
    /* overflow: auto;
    white-space: normal; */
    word-wrap: break-word;
    //text-overflow: ellipsis;
  }

  .page-header {
    width: 100%;
    margin-bottom: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .page-title-wrapper {
      display: flex;

      .page-title-icon {
        margin-right: 17px;
      }

      .title-breadcrumbs-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .page-title {
        font-size: 32px;
        font-weight: bold;
        color: ${VARIABLES.COLOR.PRIMARY};
      }
    }

    .page-button-wrapper {
      .button {
        width: auto;

        .button-icon {
          width: 20px;
          margin-right: 10px;
        }
      }
    }

    .page-input-wrapper {
      display: flex;
      width: 100%;
      margin-top: 27px;
    }
  }

  .ml-auto{
    margin-left: auto;
  }

  .mr-auto {
    margin-right: auto;
  }

  .mr-2{
    margin-right: 20px;
  }

  .text-center{
    text-align: center;
  }

  .col-auto{
    width: auto;
    display: block;
  }

  .row {
    width: auto;
  }
  .row:after {
    content: '';
    display: table;

    clear: both;
  }

  .page-body {
    background-color: ${VARIABLES.COLOR.WHITE};
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    flex: 1 1 auto;
    box-shadow: 0 0 9px ${VARIABLES.COLOR.SHADOW_A};
    padding: 15px 30px 15px;
    flex-direction: column;
    max-height: calc(100% - 87px);

    .filter-wrapper {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      max-width: 100%;
      flex: 0 0 100%;
      margin-bottom: 15px;

      .datepicker-with-info {
        display: flex;
        align-items: center;

        .info-icon {
          width: 20px;
          height: 20px;
        }

        & > * {
          margin-right: 20px;

          &:last-child {
            margin-right: 0;
          }
        }
      }

      & > * {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .nopadding {
    padding: 0 !important;
  }

  .content-wrapper {
    height: 100%;
    max-height: calc(100% - 110px);

    &.table-inside {
      display: flex;
      flex-direction: column;
    }
  }

  .scrolling-content {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${VARIABLES.COLOR.GRAY_1};
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${VARIABLES.COLOR.PRIMARY};
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${VARIABLES.COLOR.PRIMARY_HOVER};
    }
  }

  /*----------------------------
  ----------   form  -----------
  ----------------------------*/
  .form-wrapper {
    flex-wrap: wrap;
    padding: 30px 30px 0;
    max-height: 100%;
    overflow: auto;

    .info-wrapper {
      flex: 1 1 auto;
      width: auto;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;

      .detail-group {
        margin-bottom: 14px;
        color: ${VARIABLES.COLOR.PRIMARY};

        .label {
          flex: 0 0 200px;
          padding-right: 50px;
          font-weight: 400;
        }

        .data-control {
          display: flex;
        }
      }
    }
  }

  .form-actions {
    justify-content: flex-end;

    .button {
      width: 125px;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .form-row {
    flex-wrap: wrap;
    justify-content: space-between;
    /* margin-left: -20px;
    width: calc(100% + 20px); */

    &.form-row-title {
      margin-bottom: 21px;
    }
  }

  .form-col {
    flex-wrap: wrap;

    &.col-6 {
      flex: 0 0 50%;
      max-width: 662px;
      /* padding-left: 20px; */

      .form-group {
        .input-textarea-control {
          .textarea {
            width: 100%;
          }
        }
      }
    }
  }

  .form-group-title {
    background-color: ${VARIABLES.COLOR.PRIMARY};
    padding: 12px 30px;
    color: white;
    border-radius: 5px;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .form-group-header {
    color: ${VARIABLES.COLOR.PRIMARY};
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 30px;

    &.small-bottom-space {
      margin-bottom: 10px;
    }

    &.grid-to-label {
      padding-left: 10%;
      /* 66px */
    }
  }

  .form-group {
    align-items: flex-start;
    display: flex;

    .form-group-inner-wrapper {
      min-height: 42px;
      align-items: center;
      display: flex;
      align-items: baseline;

      .button {
        width: 125px;

        &:first-child {
          margin-left: 0;
        }
      }

      &.checkbox {
        flex-wrap: wrap;
        margin-bottom: 0;
        padding-top: 12px;

        & > .checkbox {
          margin-right: 0;

          .fake-label {
            color: ${VARIABLES.COLOR.PRIMARY};
          }

          &.inline {
            margin-right: 25px;
          }
        }
      }
    }

    .text {
      color: ${VARIABLES.COLOR.PRIMARY};
    }

    .input-upload-control {
      max-width: 640px;
      flex: 0 0 640px;
      min-width: 250px;

      .fake-input-label {
        flex: 1 1 auto;
        margin-right: 0;
        display: initial;
      }
    }

    .form-group-control {
      flex: 1 1 auto;
      flex-wrap: wrap;

      .input-control {
        &.score {
          max-width: 80px;
          flex: 0 0 80px;
          min-width: 80px;

          .input {
            text-align: center;
            color: ${VARIABLES.COLOR.PRIMARY};
          }
        }
      }
    }

    .input-wrapper {
      max-width: 500px;
      flex: 0 0 500px;
      min-width: 250px;

      .input {
        color: ${VARIABLES.COLOR.PRIMARY};
      }
    }

    .input-textarea-wrapper {
      flex: 0 0 500px;
      max-width: 500px;
      min-width: 250px;

      .textarea {
        color: ${VARIABLES.COLOR.PRIMARY};
      }
    }

    .button {
      /* width: auto;*/
      margin-left: 14px;

      &.verify {
        width: 140px;
      }

      &.resend-activation-email {
        width: 230px;
      }
    }

    .message {
      height: 20px;
      font-size: 12px;
      color: ${VARIABLES.COLOR.RED_1};
      margin-bottom: 10px;
      padding-left: 14px;
      opacity: 0;
    }

    .select-control {
      width: 100%;
      max-width: 500px;
    }

    .note {
      width: auto;
      color: ${VARIABLES.COLOR.PRIMARY};
      line-height: 1.25;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      min-height: 42px;
      margin-left: 14px;
    }

    .select-control {
      .select__single-value {
        color: ${VARIABLES.COLOR.PRIMARY};
      }
    }

    .unit {
      line-height: 1.25;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      min-height: 49px;
      display: flex;
    }

    & > label {
      flex: 0 0 132px;
      color: ${VARIABLES.COLOR.PRIMARY};
      display: flex;
      text-align: right;
      margin-right: 30px;
      line-height: 1.25;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      min-height: 49px;

      &.required {
        &:after {
          content: '*';
          display: inline;
          color: ${VARIABLES.COLOR.RED_2};
          margin-left: 5px;
        }
      }
    }

    &.with-unit {
      .form-group-inner-wrapper {
        .unit {
          margin-left: 15px;
          color: ${VARIABLES.COLOR.PRIMARY};
        }
      }
    }

    &.bond-config-input-block {
      border-radius: 5px;
      background-color: white;
      //justify-content: space-between;
      padding: 20px 50px;

      .form-group-control {
        max-width: 230px;
        flex: 230px 0 0;
        margin-bottom: 35px;
        position: relative;

        .input-wrapper {
          min-width: 0;
        }

        .message {
          position: absolute;
          background-color: ${VARIABLES.COLOR.RED_2};
          border-radius: 5px;
          color: ${VARIABLES.COLOR.WHITE};
          padding: 7px 14px;
          height: auto;
          display: flex;
          align-items: center;
          font-size: 17px;
          margin-bottom: 0;
          width: 100%;
          left: 0;
          right: 0;
          top: 90%;
          z-index: 2;

          &:before {
            content: '';
            display: inline-block;
            width: 17px;
            height: 16px;
            position: relative;
            background-image: url('../../images/icons/icon-warning.png');
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 10px;
          }

          &:after {
            content: '';
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 9px solid ${VARIABLES.COLOR.RED_2};
            top: -8px;
            left: 18px;
          }
        }
      }

      .unit {
        flex: 0 0 60px;
        color: ${VARIABLES.COLOR.SECONDARY};
      }

      & > label {
        text-align: left;
        flex: 1 1 auto;
        //max-width: 300px;
        justify-content: flex-start;
      }

      &:nth-child(2n - 1) {
        background-color: ${VARIABLES.COLOR.SECONDARY};

        & > label {
          color: white;
        }

        .unit {
          color: white;
        }
      }

      &.is-error {
        .form-group-control {
          .input {
            border-color: ${VARIABLES.COLOR.RED_2};
            outline-color: ${VARIABLES.COLOR.RED_2};
          }
        }

        & > label {
          color: ${VARIABLES.COLOR.PRIMARY};
        }

        &:nth-child(2n - 1) {
          background-color: ${VARIABLES.COLOR.SECONDARY};

          & > label {
            color: white;
          }
        }
      }
    }

    &.is-error {
      label {
        color: ${VARIABLES.COLOR.RED_1};
      }

      .input-control {
        .input {
          border-color: ${VARIABLES.COLOR.RED_1};
        }
      }

      .react-datepicker-wrapper {
        border-color: ${VARIABLES.COLOR.RED_1};
      }

      &.labelname {
        label {
          color: ${VARIABLES.COLOR.PRIMARY};
        }
      }

      .input-textarea-control {
        .textarea {
          border-color: ${VARIABLES.COLOR.RED_1};
        }
      }


      .select__control {
        border-color: ${VARIABLES.COLOR.RED_1};
      }

      .input-upload-control {
        .fake-input-label {
          .fake-input {
            border-color: ${VARIABLES.COLOR.RED_1};
          }
        }
      }

      .dropdown-container {
        border-color: ${VARIABLES.COLOR.RED_1};
      }

      .message {
        opacity: 1;
      }
    }
  }

  .form-action-footer {
    display: flex;
    justify-content: flex-end;
    margin: 150px 0 50px;
    align-items: center;

    .button {
      margin: 0 5px;
      min-width: 125px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .note {
      color: ${VARIABLES.COLOR.GRAY_2};
    }

    &.group-inside {
      justify-content: space-between;

      & > div {
        display: flex;
      }
    }
  }

  .scrolling-content {
    overflow: auto;
    max-height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${VARIABLES.COLOR.GRAY_1};
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${VARIABLES.COLOR.PRIMARY};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${VARIABLES.COLOR.PRIMARY_HOVER};
  }

  .__react_component_tooltip {
    background-color: ${VARIABLES.COLOR.PRIMARY};
    color: ${VARIABLES.COLOR.WHITE};
  }

  /* Media queries
  ------------------------------- */
  @media (max-width: 1440.98px) {
    html,
    body {
      font-size: 15px;
    }

    .page-header {
      .page-title-wrapper {
        .page-title-icon {
          margin-right: 15px;
        }

        .page-title {
          font-size: 30px;
        }
      }

      .page-button-wrapper {
        .button {
          .button-icon {
            width: 18px;
          }
        }
      }
    }

    .page-body {
      max-height: calc(100% - 77px);
      padding: 15px 25px 15px 15px;

      .filter-wrapper {
        & > * {
          margin-right: 15px;
        }

        .datepicker-with-info {
          .info-icon {
            width: 17px;
            height: 17px;
          }

          & > * {
            margin-right: 15px;
          }
        }
      }
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    .scrolling-content {
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
    }

    .form-action-footer {
      margin: 100px 0 30px;
    }

    .form-group-title {
      margin-bottom: 25px;
    }

    .form-group {
      &.bond-config-input-block {
        border-radius: 5px;
        padding: 20px 40px;

        .form-group-control {
          max-width: 200px;
          flex: 200px 0 0;
          margin-bottom: 25px;

          .message {
            padding: 6px 12px;
            font-size: 15px;

            &:before {
              width: 14px;
              height: 13px;
            }

            &:after {
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-bottom: 7px solid ${VARIABLES.COLOR.RED_2};
              top: -6px;
              left: 16px;
            }
          }
        }
      }
    }

    .form-wrapper {
      padding: 20px 20px 0;
    }
  }

  @media (max-width: 1280.98px) {
    html,
    body {
      font-size: 14px;
    }

    .page-header {
      margin-bottom: 20px;

      .page-title-wrapper {
        .page-title {
          font-size: 26px;
        }
      }

      .page-button-wrapper {
        .button {
          .button-icon {
            width: 16px;
          }
        }
      }
    }

    .page-body {
      max-height: calc(100% - 60px);
      padding: 15px;

      .filter-wrapper {
        & > * {
          margin-right: 10px;
        }

        .datepicker-with-info {
          .info-icon {
            width: 15px;
            height: 15px;
          }

          & > * {
            margin-right: 10px;
          }
        }
      }
    }

    .form-group {
      & > label {
        min-height: 40px;
      }

      .unit {
        min-height: 40px;
      }

      &.bond-config-input-block {
        border-radius: 4px;
        padding: 15px 30px;

        .form-group-control {
          max-width: 180px;
          flex: 180px 0 0;
          margin-bottom: 20px;

          .message {
            padding: 5px 10px;
            font-size: 14px;

            &:before {
              width: 12px;
              height: 11px;
            }

            &:after {
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-bottom: 6px solid ${VARIABLES.COLOR.RED_2};
              top: -5px;
              left: 14px;
            }
          }
        }
      }
    }

    .form-group-title {
      margin-bottom: 20px;
    }

    .form-wrapper {
      padding: 15px 15px 0;
    }
  }

  @media (max-width: 1024.98px) {
    html,
    body {
      font-size: 12px;
    }

    .page-header {
      margin-bottom: 10px;

      .page-title-wrapper {
        .page-title {
          font-size: 22px;
        }
      }

      .page-button-wrapper {
        .button {
          .button-icon {
            width: 14px;
            margin-bottom: 1px;
          }
        }
      }
    }

    .page-body {
      max-height: calc(100% - 40px);
      padding: 10px;
    }

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    .scrolling-content {
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
    }

    .form-group {
      & > label {
        min-height: 34px;
      }

      .unit {
        min-height: 34px;
      }

      &.bond-config-input-block {
        border-radius: 4px;
        padding: 15px 30px;

        .form-group-control {
          max-width: 160px;
          flex: 160px 0 0;
          margin-bottom: 15px;

          .message {
            padding: 4px 10px;
            font-size: 12px;

            &:before {
              width: 10px;
              height: 9px;
              margin-right: 7px;
            }

            &:after {
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-bottom: 5px solid ${VARIABLES.COLOR.RED_2};
              top: -4px;
              left: 11px;
            }
          }
        }
      }
    }

    .form-group-title {
      margin-bottom: 15px;
    }

    .form-wrapper {
      padding: 10px 10px 0;
    }
  }

`;
