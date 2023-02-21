import { css } from '@emotion/react';

import { COLORS } from './colors';

export const GlobalStyles = css`
  padding: 0;
  margin: 0;
  background: ${COLORS.white};
  min-height: 100%;
  min-height: 100%;
  height: auto;
  transition: 'background' 0.2s ease-in, color 0.2s ease-in;

  a {
    opacity: 1;
    text-decoration: none;
    color: ${COLORS.black};
    > span {
      transition: opacity 0.4s;
      &:active {
        opacity: 0.28;
      }
    }
  }

  button {
    font-size: inherit;
    cursor: pointer;
    transition: opacity 0s;
    color: ${COLORS.black};

    &:hover {
      opacity: 0.92;
    }
    &:active {
      opacity: 0.83;
    }
    &:disabled {
      opacity: 0.72;
    }
  }
`;
