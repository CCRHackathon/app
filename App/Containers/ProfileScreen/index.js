import React, {Fragment, useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonColored from '../../Components/ButtonColored'

import axios from 'axios'

import { Container, BaseContainer, TitleHeaderContainer, FormContainer, ExpandForm } from './styles';

const ProfileScreen = ({navigation}) => {

const [payload, setPayload] = useState({})

useEffect(() => {
  async function loadInfo() {
    await axios.get('http://127.0.0.1:3333/api/group/1').then(e => setPayload(e.data))
  }

  loadInfo()
}, [])

  return (
      <Fragment>
          <ConnectionHeader porcentage="100" />
        <Container>
          <BaseContainer>
          <TitleHeaderContainer>
              <Text>Seu perfil</Text>
              <Text style={{fontWeight: 'bold', fontSize: 18, top: -5}}>Edimar Pereira</Text>
          </TitleHeaderContainer>
          <FormContainer>
              <Text>edimar@pereira.com</Text>
              <Text>Volvo 2020</Text>
          </FormContainer>
          </BaseContainer>
          <ExpandForm>
              <Text style={{color: '#8f8f8f'}}>Seus Grupos</Text>
              <Text>Pedro e Bino - Só os carga pesada online</Text>
              <Text>Radio 95</Text>
          </ExpandForm>
        </Container>
      </Fragment>
  );
}

export default ProfileScreen;