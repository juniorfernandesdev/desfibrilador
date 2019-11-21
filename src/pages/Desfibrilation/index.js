import React, { Component } from 'react';
import { Vibration, Text } from 'react-native';

import { Container } from './styles';

import BackgroundDea from '../../components/BackgroundDea';
import Header from '../../components/Header';
import ContentDea from '../../components/ContentDea';
import Footer from '../../components/Footer';

const DURATION = 5000;
const PATTERN = [0, 5000, 0, 0];

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      Power: false,
      Message: '',
      status: '',
    };
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  togglePower = () => {
    this.setState({ Power: !this.state.Power });
    if (!this.state.Power) {
      setTimeout(() => this.setState({ Message: 'Analisando...' }), 1000);
      setTimeout(() => this.setState({ Message: 'Verificando...' }), 3000);
      setTimeout(() => this.setState({ Message: 'Pronto' }), 5000);
    } else {
      this.setState({ Message: 'Off' });
      this.setState({ number: 0 });
    }
  };

  startVibration = () => {
    Vibration.vibrate(PATTERN);
  };

  stopVibration = () => {
    Vibration.cancel();
  };

  addOne = () => {
    this.setState({ number: this.state.number + 1 });
  };

  stopTimer = () => {
    clearTimeout(this.timer);
  };

  functionCombined = () => {
    this.startVibration();
    this.addOne();
  };

  render() {
    const { number, Message, status, Power } = this.state;

    return (
      <>
        <BackgroundDea>
          <Container>
            <Header power={Power} togglePower={this.togglePower} />
            <ContentDea
              functionCombined={this.functionCombined}
              stopTimer={this.stopTimer}
              number={number}
              message={Message}
              status={status}
              power={Power}
            />
            <Footer />
          </Container>
        </BackgroundDea>
      </>
    );
  }
}
