import React, {Fragment} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';  

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonWithIcon from '../../Components/ButtonWithIcon'

import { 
  Container, 
  BaseContainer, 
  ChangeNetwork, 
  ActionButton,
  AlertContainer
 } from './styles';

const SplashScreen = ({navigation}) => {
  return (
    <Fragment>
      <ConnectionHeader porcentage="100" />
        <Container>
            <ChangeNetwork>
              <Text style={{marginBottom: 10, fontSize: 14}}>Mudar de rede</Text>
            </ChangeNetwork>
         <BaseContainer>
          <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 14}}>Você faz parte dessa <Text style={{fontWeight: 'bold'}}>rede de caminhoneiros :)</Text></Text>
          <FluxCounter from="Porto Alegre" to="São Paulo" usersOnNetwork="42" />
          <ActionButton><Text>Ver últimas mensagens da rede</Text></ActionButton>
          <ActionButton><Text>Ver últimos alertas da rede</Text></ActionButton>
          <ButtonWithIcon />
              <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ddd',
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 6 },
                shadowOpacity: 1,
                shadowRadius: 2,
                marginTop: 10,
                height: 250,
                widht: 100,
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
              >
                <Icon name="alert-triangle" size={80} color="#3215bc" style={{
                  marginBottom: '10%'
                }}/>
                <TouchableOpacity
                onPress={() => navigation.navigate('AlertScreen')}
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#ddd',
                    shadowColor: '#000',
                    shadowOffset: { width: 3, height: 6 },
                    shadowOpacity: 1,
                    shadowRadius: 2,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60 ,
                    
                  }}
                  >
                   <Text style={{color: '#3215bc'}}>enviar</Text> 
                   <Text style={{fontWeight: 'bold', fontSize: 23, color: '#3215bc'}}>alerta</Text> 
                </TouchableOpacity>  
              </View>
            
         </BaseContainer>
      </Container>
    </Fragment>
  );
}

export default SplashScreen;