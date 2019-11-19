import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Text } from './styles';

export default function BotaoLigar({ children, icon, ...rest }) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} size={25} color="rgba(255, 255, 255, 0.6)" />}
      <Text>{children}</Text>
    </Container>
  );
}

BotaoLigar.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
};

BotaoLigar.defaultProps = {
  icon: null,
};
