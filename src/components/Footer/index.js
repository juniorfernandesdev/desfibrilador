import React from 'react';

import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Text, TextProject, TextDev } from './styles';

export default function Footer() {
  return (
    <Container>
      <Text>
        DEA, é o equipamento de atendimento pré-hospitalar capaz de reanimar a
        vítima que apresente parada cardiovascular através de choques elétricos,
        como estimulantes.
      </Text>
      <TextProject>EnfAP - UNINASSAU ARACAJU</TextProject>
      <TextDev>
        <Text>APP desenvolvido por Junior Fernandes</Text>
        <IconTwo
          name="linkedin-box"
          size={15}
          color="#4267BC"
          style={{ marginLeft: 12 }}
        />
      </TextDev>
    </Container>
  );
}
