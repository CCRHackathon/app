import React, {Fragment} from 'react';
import { View, Text } from 'react-native';

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonColored from '../../Components/ButtonColored'

import { Container, BaseContainer, TitleHeaderContainer, FormContainer, ExpandForm } from './styles';

const ConfirmAlert = ({navigation}) => {
    const {key} = navigation.state.params
    console.log(key)
  return (
      <Fragment>
          <ConnectionHeader porcentage="100" />
        <Container>
          <BaseContainer>
          <TitleHeaderContainer>
              <Text>confirmar</Text>
              <Text style={{fontWeight: 'bold', fontSize: 18, top: -5}}>alerta</Text>
          </TitleHeaderContainer>
          <FormContainer>
              <Text>Alerta selecionado</Text>
              <View style={{
                  elevation: 2,
                  
                  width: '100%', 
                  height: 60, 
                  marginTop: 6,
                  justifyContent: 'center',
                  paddingLeft: 20,
                  }}>
                <Text style={{fontWeight: 'bold'}}>{key.key} em 255km CCR Nova Dutra</Text>
              </View>
          </FormContainer>
          </BaseContainer>
          <ExpandForm>
              <Text style={{color: '#8f8f8f'}}>Rede que será informada</Text>

                 <FluxCounter from="Porto Alegre" to="São Paulo" usersOnNetwork="42" />
                 <View style={{top: -30}}><ButtonColored /></View>
          </ExpandForm>
        </Container>
      </Fragment>
  );
}

export default ConfirmAlert;