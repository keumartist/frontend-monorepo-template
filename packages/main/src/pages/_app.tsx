import { AppProps } from 'next/app';

import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { GlobalStyles } from '@/constants/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            ${GlobalStyles}
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
