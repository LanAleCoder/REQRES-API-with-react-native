import React from 'react';
import {View} from 'react-native';
import CardComponent from '../Card/Card';

const Cardmap = ({personas}: any) => {
  return (
    <View>
      {personas.map(
        (person: {
          id: number;
          first_name: string;
          last_name: string;
          avatar: string;
          email: string;
        }) => (
          <CardComponent
            idP={person.id}
            first_name={person.first_name}
            last_name={person.last_name}
            avatar={person.avatar}
            email={person.email}
          />
        ),
      )}
    </View>
  );
};

export default Cardmap;
