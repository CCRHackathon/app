import React from 'react';
import { View, Text} from 'react-native';

import { Container, ConnectionStatus } from './styles';

const ConnectionHeader = ({porcentage, connected}) => {
  const RESULT = connected ? 'CONECTADO' : 'DESCONECTADO'
  const RESULT_BALL = connected ? '#84c56a' : 'red'
  return (
  <Container>
      <Text>{RESULT}</Text>
      <ConnectionStatus color={RESULT_BALL}/>
  </Container>);
}

export default ConnectionHeader;