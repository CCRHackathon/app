import React from 'react';
import { View, Text} from 'react-native';

import { Container, ConnectionStatus } from './styles';

const FluxCounter = ({porcentage, to, from, usersOnNetwork}) => {

  return (
  <Container>
      <Text>Fluxo sentido <Text style={{fontWeight: 'bold'}}>{from}</Text> até <Text style={{fontWeight: 'bold'}}>{to}</Text></Text>
      <Text>{usersOnNetwork} caminhoneiros <Text style={{color: "#7ea850"}}>online.</Text></Text>
  </Container>);
}

export default FluxCounter;