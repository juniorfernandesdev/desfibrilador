import React, { Component } from 'react';

import { Text, View, Vibration } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  HeaderContentDea,
  Display,
  ButtonChock,
  StatusTop,
  CountChock,
  Healter,
  StatusButton,
  StatusDea,
} from './styles';

const DURATION = 5000;
const PATTERN = [0, 5000, 0, 0];
const Message = '';

export default function ContentDea({ number, status, message, functionCombined, stopTimer, power }) {
  return (
    <>
      <Container>
        <HeaderContentDea>
          <View style={{ alignContent: 'space-between' }}>
            <Text
              style={{ color: '#ED3219', fontWeight: 'bold', fontSize: 21 }}
            >
              DESFIBRILADOR - DEA
            </Text>
            <Text style={{ color: '#403B36', fontSize: 15 }}>
              Desfibrilador Externo Automático
            </Text>
          </View>
          <IconTwo name="gamepad-round" size={40} color="#ED3219" />
        </HeaderContentDea>

        <Display>
          <StatusTop>
            <CountChock>{number}</CountChock>
            <Healter>
              <IconTwo name="heart-pulse" size={30} color="#c0c3cf" />
            </Healter>
          </StatusTop>
          <StatusDea>{message}</StatusDea>
          <StatusButton>
            <Text>{status}</Text>
          </StatusButton>
        </Display>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <ButtonChock
            onPress={functionCombined}
            onPressOut={stopTimer}
            enabled={power}
          >
            <Icon name="flash-on" size={55} color="rgba(255, 255, 255, 1)" />
          </ButtonChock>
        </View>
      </Container>
    </>
  )
}
