import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';

import { Container } from './styles';

import HeaderMain from '../../components/HeaderMain';
import Footer from '../../components/Footer';
import ButtonEntrar from '../../components/BottonEntrar';
import Background from '../../components/BackgroundEntrar';

export default function App({ navigation }) {
  return (
    <Background>
      <Container>
        <HeaderMain />
        <Image source={logo} />
        <ButtonEntrar onPress={() => navigation.navigate('Desfibrilation')}>
          ENTRAR
        </ButtonEntrar>
        <Footer />
      </Container>
    </Background>
  );
}
