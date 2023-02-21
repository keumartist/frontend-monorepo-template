import Head from 'next/head';

import styled from '@emotion/styled';

import MainPage from '@/modules/main';

export default function Index() {
  return (
    <>
      <Head>
        <title>Main page | my app</title>
      </Head>
      <Container>
        <MainPage />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
