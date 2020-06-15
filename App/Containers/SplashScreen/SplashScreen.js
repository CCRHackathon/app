import React, {Fragment, useState, useEffect } from 'react';
import { View,
   Text, 
   TouchableOpacity, 
   ToastAndroid,
   PermissionsAndroid,
  } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';  

import ConnectionHeader from '../../Components/ConnectionHeader'
import FluxCounter from '../../Components/FluxCounter'
import ButtonWithIcon from '../../Components/ButtonWithIcon'

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-community/voice';

import axios from 'axios';

import {
  initialize,
  isSuccessfulInitialize,
  startDiscoveringPeers,
  stopDiscoveringPeers,
  unsubscribeFromPeersUpdates,
  unsubscribeFromConnectionInfoUpdates,
  subscribeOnConnectionInfoUpdates,
  subscribeOnPeersUpdates,
  connect,
  disconnect,
  createGroup,
  removeGroup,
  getAvailablePeers,
  sendFile,
  receiveFile,
  getConnectionInfo,
  sendMessage,
} from 'react-native-wifi-p2p';

import Geolocation from '@react-native-community/geolocation';

import { 
  Container, 
  BaseContainer, 
  ChangeNetwork, 
  ActionButton,
  AlertContainer
 } from './styles';

const SplashScreen = ({navigation}) => {

  const [recognized, setRecognized] = useState("");
  const [pitch, setPitch] = useState("");
  const [error, setError] = useState("");
  const [end, setEnd] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [Devices, setDevices] = useState([]);
  const [connected, setConnected] = useState(false);
  const [location, setLocation] = useState("")

    useEffect(() => {
      Geolocation.watchPosition(e => setLocation(e))
      initialize()
      isSuccessfulInitialize().then(status => {
        startDiscoveringPeers()
          .then(() => {
            subscribeOnPeersUpdates(({devices}) =>{
              HandleNewPeers(devices)
            });
            subscribeOnConnectionInfoUpdates(HandleNewInfo);
          })
          .catch(err =>{
            console.log(err)
          } 
          );
      });

      const onSpeechStart = (e) => {
        console.log('onSpeechStart: ', e);
        setStarted(true)
      };
  
      const onSpeechRecognized = (e) => {
        console.log('onSpeechRecognized: ', e);
        setRecognized(e)
      };
  
      const onSpeechEnd = (e) => {
        console.log('onSpeechEnd: ', e);
        setEnd(true)
        setStarted(false)
      };
  
      const onSpeechError = (e) => {
        console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error))
      };
    
      const onSpeechResults = (e) => {
        setResults(e.value)
        const firstWord = e.value[0].replace(/ .*/, '');
        //Perdoe-nos pela gambiarra
        switch (firstWord) {
          case 'acidente':
            navigation.navigate('ConfirmAlert', {
              key: {
                key: 'acidente'
                }
              })
            break;
          case 'assalto':
            navigation.navigate('ConfirmAlert', {
              key: {
                key: 'Assalto ou furto'
                }
              })
            break;
          case 'blitz':
            navigation.navigate('ConfirmAlert', {
              key: {
                key: 'Blitz'
                }
              })
            break;
          case 'trânsito':
            navigation.navigate('ConfirmAlert', {
              key: {
                key: 'Trânsito'
                } 
              })
            break;
          case 'obras':
            navigation.navigate('ConfirmAlert', {
              key: {
                key: 'Obras'
                }
              })
            break;
          case 'buraco':
            navigation.navigate('ConfirmAlert', {
              key: {
                key: 'Via em más condições'
                }
              })
            break;
            case 'Rua':
              navigation.navigate('Destiny', {
                destino: e.value[0],
                location: location,
              })
              break;  
          
          default:
            return axios.post('http://127.0.0.1:3333/api/transmission/', {
              lat: location.latitude,
              long: location.longitude,
              title: "Transmissão pelo app",
              message: e.value,
              user:"1"
            }).then(response => {
              ToastAndroid.show('Mensagem propagada pela rede!', 1000)
              sendMessage(e.value)
            }).catch(err => ToastAndroid.show('Ocorreu um erro ao propagar sua mensagem', 1000))
            break;
        }

      };
    
      const onSpeechPartialResults = (e) => {
        console.log('onSpeechPartialResults: ', e);
        setPartialResults(e.value)
      };
    
      const onSpeechVolumeChanged = (e) => {
        console.log('onSpeechVolumeChanged: ', e);
        setPitch(e.value)
      };

      Voice.onSpeechStart = onSpeechStart;
      Voice.onSpeechRecognized = onSpeechRecognized;
      Voice.onSpeechEnd = onSpeechEnd;
      Voice.onSpeechError = onSpeechError;
      Voice.onSpeechResults = onSpeechResults;
      Voice.onSpeechPartialResults = onSpeechPartialResults;
      Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Access to wi-fi P2P mode',
          message: 'ACCESS_COARSE_LOCATION',
        },
      ).then(granted => {
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          ToastAndroid.show('Permissão negada: p2p não vai funcionar.', 1000);
        }
      });

      return () => {
        Voice.destroy().then(Voice.removeAllListeners)

        unsubscribeFromConnectionInfoUpdates(event =>
          console.log('unsubscribeFromConnectionInfoUpdates', event),
        );
        unsubscribeFromPeersUpdates(event =>
          console.log('unsubscribeFromPeersUpdates', event),
        );
      }
    }, [])

    const HandleNewPeers = peers => {
      setDevices(peers);
    };
  
    const HandleNewInfo = (info, secondParam) => {
      ToastAndroid.show('Nova informação propagada: ' + JSON.stringify(info), 1000);
    };
  
    const ConnectToDevice = device => {
      connect(device.deviceAddress).then(() =>
        ToastAndroid.show(`Conexão direta estabelecida com ${device.deviceName}`, 1000),
      );
    };

    const ConnectToGroup = device => {
      createGroup(device.deviceAddress).then(() =>
        ToastAndroid.show(`Rede criada! ${device.deviceName}`, 1000),
      );
    };

    const _startRecognizing = async () => {
      
        setRecognized("");
        setPitch("");
        setError("");
        setStarted("");
        setResults("");
        setPartialResults([]);
        setEnd([]);
      
  
      try {
        await Voice.start('pt-BR');
      } catch (e) {
        console.error(e);
      }
    };

    const _stopRecognizing = async () => {
      try {
        await Voice.stop();
      } catch (e) {
        console.error(e);
      }
    };
  
    const _cancelRecognizing = async () => {
      try {
        await Voice.cancel();
      } catch (e) {
        console.error(e);
      }
    };
  
    const _destroyRecognizer = async () => {
      try {
        await Voice.destroy();
      } catch (e) {
        console.error(e);
      }
      setRecognized("");
      setPitch("");
      setError("");
      setStarted("");
      setResults([]);
      setPartialResults([]);
      setEnd('');
    };
  
    const _disconnectFromNetwork = async () => {
      setConnected(false)
      setDevices([])
      
      disconnect().then(() => ToastAndroid.show('Desconectado.', 1000))
    }

  return (
    <Fragment>
      <ConnectionHeader connected={Devices.length > 0 ? true : false} />
        <Container>
            <ChangeNetwork onPress={_disconnectFromNetwork}>
              <Text style={{marginBottom: 10, fontSize: 14}}>Sair da rede</Text>
            </ChangeNetwork>
         <BaseContainer>
          <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 14}}>Você faz parte dessa <Text style={{fontWeight: 'bold'}}>rede de caminhoneiros :)</Text></Text>
          <FluxCounter from="Porto Alegre" to="São Paulo" usersOnNetwork={Devices.length} />
          <ActionButton onPress={() => navigation.navigate('Transmissions')}><Text>Ver últimas mensagens da rede</Text></ActionButton>

          {/* <ButtonWithIcon /> */}
              <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                width: 200,
                borderRadius: 200 / 2,
                backgroundColor: '#d1d6fb',
                alignSelf: 'center',
                marginTop: 100
              }}
              onPress={_startRecognizing}
              >
                <Icon name="microphone-alt" size={100} color="#3215bc"/>
              </TouchableOpacity>
            
         </BaseContainer>
      </Container>
    </Fragment>
  );
}

export default SplashScreen;