import React, {Fragment} from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonColored from '../../Components/ButtonColored'

import { Container, BaseContainer, TitleHeaderContainer, FormContainer, ExpandForm } from './styles';

const Transmissions = ({navigation}) => {
  return (
      <Fragment>
          <ConnectionHeader porcentage="100" />
        <Container>
        <WebView source={{ uri: 'http://ec2-18-222-254-212.us-east-2.compute.amazonaws.com/transmissions.html' }} />
        </Container>
      </Fragment>
  );
}

export default Transmissions;