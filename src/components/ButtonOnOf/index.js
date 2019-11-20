import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Text } from './styles';

export default function BotaoLigar({ icon, power, togglePower, ...rest }) {
  return (
    <Container onPress={togglePower} {...rest}>
      {icon && <Icon name={icon} size={25} color="rgba(255, 255, 255, 0.6)" />}
      <Text>{power ? 'Desligar' : 'Ligar'}</Text>
    </Container>
  );
}

BotaoLigar.propTypes = {
  icon: PropTypes.string
};

BotaoLigar.defaultProps = {
  icon: null,
};
