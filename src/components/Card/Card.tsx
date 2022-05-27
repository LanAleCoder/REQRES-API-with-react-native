import React from 'react';
import {View, Text, Image} from 'react-native';
//import styles from './Card.style';

type Tipos = {
  idP: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const CardComponent = ({email, first_name, last_name, avatar, idP}: Tipos) => {
  return (
    <View>
      <View>
        <Text>{idP}</Text>
      </View>
      <View>
        <Text>{first_name}</Text>
        <Text>{last_name}</Text>
      </View>
      <View>{email}</View>
      <View>
        <Image source={{uri: avatar}} />
      </View>
    </View>
  );
};

export default CardComponent;
