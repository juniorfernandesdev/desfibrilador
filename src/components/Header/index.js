import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../../assets/logo-main.png';

import BotaoLigar from '../ButtonOnOf';
import { Container } from './styles';

export default function Header({ power, tooglePower }) {
  return (
    <>
      <Container>
        <Icon name="error-outline" size={20} color="rgba(128, 25, 12, 0.6)" />
        <Image source={Logo} />
        <BotaoLigar icon="power-settings-new" power={power} togglePower={togglePower} />
      </Container>
    </>
  );
}
