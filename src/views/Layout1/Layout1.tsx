import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator, Image} from 'react-native';
import stylesLayout from './Layout1.styles';

const Layout1 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <>
              <View style={stylesLayout.cardsContainer}>
                <View style={stylesLayout.namesContainer}>
                  <Text style={stylesLayout.textNameSize}>
                    {item.first_name} {item.last_name}
                  </Text>
                </View>
                <View>
                  <Text style={stylesLayout.emailTextSize}>{item.email}</Text>
                </View>
                <View>
                  <Image
                    source={{uri: item.avatar}}
                    style={stylesLayout.imageSize}
                  />
                </View>
              </View>
            </>
          )}
        />
      )}
    </View>
  );
};

export default Layout1;
