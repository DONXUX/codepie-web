import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import Description from './_description';
import Social from './_social';
import { getAssetURL } from '../../utils/asset';
import Header from "../../component/header/header";

export default function LoginPage() {
  return (
    <Container>
      <Pie>
        <Image
          loader={(props) => getAssetURL(props.src)}
          layout="fill"
          alt="ic"
          src={'image/pie_piece.svg'}
        />
      </Pie>
      <Header isLoggedIn={false} />
      <Body>
        <Row>
          <Description />
          <Social />
        </Row>
      </Body>
    </Container>
  );
}

const Pie = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: 0;
`;

const Container = styled.div`
  flex: 1;
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Body = styled.div`
  height: 100%;
  margin: 0 80px;
`;
