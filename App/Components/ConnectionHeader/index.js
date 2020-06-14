import React from 'react';
import { View, Text} from 'react-native';

import { Container, ConnectionStatus } from './styles';

const ConnectionHeader = ({porcentage}) => {

  return (
  <Container>
      <Text>{porcentage}% CONECTADO</Text>
      <ConnectionStatus color="#84c56a"/>
  </Container>);
}

export default ConnectionHeader;