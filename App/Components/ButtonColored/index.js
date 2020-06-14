import React from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  

import { Container } from './styles';

const ButtonColored = ({color}) => {
  return (
  <Container color={color}>
      <Text style={{color: '#fff', fontSize: 17}}>enviar</Text>
    </Container>
  );
}

export default ButtonColored;