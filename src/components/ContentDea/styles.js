import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background-color: #dce6ef;
  border-radius: 15px;
  margin: 12px 0 12px;
`;

export const HeaderContentDea = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
  justify-content: space-between;
`;

export const Display = styled(LinearGradient).attrs({
  colors: ['#485157', '#31383C'],
})`
  height: 171px;
  border-radius: 10px;
  border: 3px solid #c1c7cc;
  padding: 10px;
`;

export const ButtonChock = styled(RectButton)`
  width: 114px;
  height: 114px;
  margin: 30px 0 30px;
  background-color: #f78701;
  border: 6px solid #cb7610;
  border-radius: 57px;

  align-items: center;
  justify-content: center;
`;

export const StatusTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const CountChock = styled.Text`
  color: #c0c3cf;
  font-size: 24px;
`;

export const Healter = styled.View``;

export const StatusButton = styled.Text`
  color: #c0c3cf;
  align-content: center;
  justify-content: center;
`;

export const StatusDea = styled.Text`
  color: #c0c3cf;
  text-align: center;
  padding-top: 5px;
`;
