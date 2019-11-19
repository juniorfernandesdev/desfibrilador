import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 60px;
  height: 76px;
  background-color: #09874a;

  align-items: center;
  justify-content: center;
  border-radius: 10px;

  flex-direction: column;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 11px;
`;
