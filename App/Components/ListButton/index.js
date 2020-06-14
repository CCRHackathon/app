import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Container } from './styles';

const ListButton = ({iconName, description}) => {
  return (
      <Container>

            <Icon name={iconName} size={30} style={{marginRight: 30}}/>
            <Text>{description}</Text>

      </Container>
  );
}

export default ListButton;