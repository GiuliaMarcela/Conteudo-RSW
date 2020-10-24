import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const [onChangeData, setOnChangeData] = useState({
    email: '',
    senha: '',
  });

  const updateData = () => {
    storeData(onChangeData);
  };

  const storeData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('loginData', jsonValue);
      navigation.navigate('Tabs');
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('loginData');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        navigation.navigate('Tabs');
      }
    });
  }, []);

  return (         
    <View style={styles.container}>        
      <Image
        style={styles.image}
        source={require('../../assets/icons/groupsWhite.png')}
      />
      <Text style={styles.title}> G2AC RH </Text>
    
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) =>
            setOnChangeData({...onChangeData, email: text})
          }
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) =>
            setOnChangeData({...onChangeData, senha: text})
          }
        />
      </View>

      <TouchableHighlight
        style={styles.login}
        underlayColor={'#72E31A'}
        onPress={() => updateData()}>
        <Text style={styles.textLogin}> LOGIN </Text>
      </TouchableHighlight>        
    </View>       
  );
};

export default Login;
