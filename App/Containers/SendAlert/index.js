import React, {Fragment} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

import ConnectionHeader from '../../Components/ConnectionHeader'

import ButtonColored from '../../Components/ButtonColored'
import ListButton from '../../Components/ListButton'

import { 
  Container, 
  BaseContainer, 
  TitleHeaderContainer, 
  FormContainer
 } from './styles';

 import Acidente from '../../Assets/Images/car.png'
 import Assalto from '../../Assets/Images/assalto.png'
 import Blitz from '../../Assets/Images/blitz.png'
 import Transito from '../../Assets/Images/traffic.png'
 import Obras from '../../Assets/Images/barra.png'
 import Vias from '../../Assets/Images/via.png'

 const data = [
  { key: 'Acidente', Icon: Acidente, type: 1 }, { key: 'Assalto ou furto', Icon: Assalto, type: 2 }, { key: 'Blitz', Icon: Blitz, type: 3 }, { key: 'Trânsito', Icon: Transito, type: 4 }, { key: 'Obras', Icon: Obras, type: 5 }, { key: 'Via em más condições', Icon: Vias, type: 6 }
  
];


const SendAlert = ({navigation}) => {

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / 2);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * 2);
    while (numberOfElementsLastRow !== 2 && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

  function renderItem({ item, index }){
    if (item.empty === true) {
      return <TouchableOpacity style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('ConfirmAlert', {
          key: item
        })}
      >
        <Image source={item.Icon} />
        <Text style={styles.itemText}>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      <ConnectionHeader porcentage="100" />
      <Text style={{alignSelf: 'center', fontSize: 18, marginTop: 18}}>Qual é o alerta?</Text>
      <FlatList
          data={formatData(data, 2)}
          style={styles.container}
          renderItem={renderItem}
          numColumns={2}
                   />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    padding: 5,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    borderWidth: 1,
    borderRadius: 5,
    height: Dimensions.get('window').width / 2, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#000',
  },
});

export default SendAlert;