import React from 'react';

import { Container } from './styles';

import BackgroundDea from '../../components/BackgroundDea';
import Header from '../../components/Header';
import ContentDea from '../../components/ContentDea';
import Footer from '../../components/Footer';

export default function User() {
  return (
    <>
      <BackgroundDea>
        <Container>
          <Header />
          <ContentDea />
          <Footer />
        </Container>
      </BackgroundDea>
    </>
  );
}
