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

export default class ContentDea extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      Power: false,
      Message: '',
    };
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  powerOnOf = () => {
    this.setState(!Power);
  };

  startVibration = () => {
    if (!this.Power) {
      Vibration.vibrate(PATTERN);
    }
  };

  stopVibration = () => {
    Vibration.cancel();
  };

  addOne() {
    this.setState({ number: this.state.number + 1 });
    // this.timer = setTimeout(this.addOne, 200);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  functionCombined = () => {
    this.startVibration();
    this.addOne();
  };

  render() {
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
              <CountChock>{this.state.number}</CountChock>
              <Healter>
                <IconTwo name="heart-pulse" size={30} color="#c0c3cf" />
              </Healter>
            </StatusTop>
            <StatusDea>Pronto</StatusDea>
            <StatusButton>
              <Text>Analisando...</Text>
            </StatusButton>
          </Display>
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <ButtonChock
              onPress={this.functionCombined}
              onPressOut={this.stopTimer}
            >
              <Icon name="flash-on" size={55} color="rgba(255, 255, 255, 1)" />
            </ButtonChock>
          </View>
        </Container>
      </>
    );
  }
}
