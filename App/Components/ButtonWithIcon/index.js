import React from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  

import { Container } from './styles';

const ButtonWithIcon = () => {
  return (
  <Container>
      <Text style={{marginRight: 10, color: '#3215bc'}}>Escreva aqui uma mensagem para sua rede</Text>
      <Icon name="microphone" size={30} color="#3215bc" />
    </Container>
  );
}

export default ButtonWithIcon;