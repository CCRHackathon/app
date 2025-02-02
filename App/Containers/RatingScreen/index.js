import React, {Fragment, useState} from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonColored from '../../Components/ButtonColored'

import Geolocation from '@react-native-community/geolocation';

import { Container, BaseContainer, TitleHeaderContainer, FormContainer, ExpandForm } from './styles';

const RatingScreen = ({navigation}) => {
  const {destino} = navigation.state.params
  
  const [location, setLocation] = useState("")
  Geolocation.getCurrentPosition(e => setLocation(e))
  console.log(location.longitude)
  return (
      <Fragment>
          <ConnectionHeader porcentage="100" />
        <Container>
        <WebView source={{ uri: `http://ec2-18-222-254-212.us-east-2.compute.amazonaws.com/?lat=${location.latitude}&long=${location.longitude}&destino=${destino}` }} />
        </Container>
      </Fragment>
  );
}

export default RatingScreen;