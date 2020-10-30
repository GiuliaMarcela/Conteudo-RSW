import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardFuncionario from '../../components/CardFuncionario';

const Home = ({navigation}) => {
  return (
    <View style={StyleContainer.container}>
      <View>
        <Text style={StyleTitle.title}>Funcionários</Text>
      </View>
      <View>
        <CardFuncionario navigation={navigation} />
      </View>
    </View>
  );
};

const StyleContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#722AF7',
    alignItems: 'center',
  },
});

const StyleTitle = StyleSheet.create({
  title: {
    fontFamily: 'NotoSansTC-Bold',
    fontSize: 36,
    color: '#fff',
  },
});

export default Home;
