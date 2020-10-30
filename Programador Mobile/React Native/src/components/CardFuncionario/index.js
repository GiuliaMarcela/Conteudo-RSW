import React, {useEffect, useState} from 'react';
import Api from '../../service/api';
import NetInfo from '@react-native-community/netinfo';
import FuncionarioSchema from '../../schemas/FuncionarioSchema';
import {useIsFocused} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  BackHandler,
} from 'react-native';

const CardFuncionario = ({navigation}) => {
  const [funcionarios, setFuncionarios] = useState([]);
  const isFocused = useIsFocused();

  const Realm = require('realm');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    AddFuncionario();
  }, [isFocused]);

  async function AddFuncionario() {
    const testeNet = NetInfo.addEventListener(async (state) => {
      if (state.isConnected) {
        try {
          const response = await Api.get('/funcionario');
          setFuncionarios(response.data);
          await saveFuncionario(response.data);
        } catch {
          console.log('erro');
        }
      } else {
        Realm.open({schema: [FuncionarioSchema]}).then((realm) => {
          const data = realm.objects('Funcionario');
          setFuncionarios(data);
        });
      }
    });
    testeNet();
  }

  async function saveFuncionario(funcionarios) {
    Realm.open({schema: [FuncionarioSchema]}).then((realm) => {
      realm.write(() => {
        realm.delete(realm.objects('Funcionario'));
      });
      funcionarios.map((func) => {
        realm.write(() => {
          realm.create('Funcionario', {
            id: func.id,
            nome: func.nome,
            cpf: func.cpf,
          });
        });
      });
    });
  }

  const exclusionCheck = (funcionario) => {
    Alert.alert(
      'Remover...',
      `Deseja remover ${funcionario.nome} ?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => deleteFuncionario(funcionario),
        },
      ],
      {cancelable: false},
    );
  };

  const deleteFuncionario = (funcionario) => {
    const testeNet = NetInfo.addEventListener(async (state) => {
      if (state.isConnected) {
        Api.delete(`/funcionario/${funcionario.id}`).then((Response) =>
          Alert.alert(`Funcinário removido. ${Response.data}`),
        );
        // .catch(Alert.alert('Ops! Algo deu errado! Tente novamente.'));
        AddFuncionario();
      } else {
        Alert.alert(
          'Offline',
          'Não é possível realizar essa operação sem conexão à internet',
        );
      }
    });
  };

  return (
    <ScrollView>
      {funcionarios.map((funcionario) => (
        <View key={funcionario.id} style={StyleCardView.card}>
          <TouchableHighlight
            style={StyleTouch.touch}
            underlayColor={'#853FFA'}
            onPress={() => navigation.navigate('UpdateUser', funcionario)}
            onLongPress={() => exclusionCheck(funcionario)}>
            <View style={StyleContainerCard.area}>
              <Image
                style={StyleImage.image}
                source={require('../../assets/icons/personblack.png')}
              />

              <Text style={StyleText.text}>
                ID: {funcionario.id}
                {'\n'}
                Nome: {funcionario.nome}
                {'\n'}
                CPF: {funcionario.cpf}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
};

const StyleCardView = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#72E31A',
    borderWidth: 2,
    minWidth: 320,
    minHeight: 95,
    elevation: 10,
  },
});

const StyleTouch = StyleSheet.create({
  touch: {
    borderRadius: 10,
  },
});

const StyleContainerCard = StyleSheet.create({
  area: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    minHeight: 95,
  },
});

const StyleImage = StyleSheet.create({
  image: {
    width: 62,
    height: 62,
  },
});

const StyleText = StyleSheet.create({
  text: {
    fontFamily: 'NotoSansTC-Bold',
    fontSize: 15,
  },
});

export default CardFuncionario;
