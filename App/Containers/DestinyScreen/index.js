import React, {Fragment, useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonColored from '../../Components/ButtonColored'

import Geolocation from '@react-native-community/geolocation';

import { Container, BaseContainer, TitleHeaderContainer, FormContainer, ExpandForm } from './styles';

const Destiny = ({navigation}) => {
  const {destino, location} = navigation.state.params

  console.log(location)
  useEffect(() => {
    // Geolocation.getCurrentPosition(e => setLocation(e))
  }, [])
  
  
  //let mount = `http://ec2-18-222-254-212.us-east-2.compute.amazonaws.com/?lat=${latitude}&long=${longitude}&destino=${destino}`
  // console.log(mount)

  return (
      <Fragment>
          <ConnectionHeader porcentage="100" />
        <Container>
        <WebView source={{ uri: `http://ec2-18-222-254-212.us-east-2.compute.amazonaws.com/?lat=${location}&long=${location}` }} />
        </Container>
      </Fragment>
  );
}

export default Destiny;