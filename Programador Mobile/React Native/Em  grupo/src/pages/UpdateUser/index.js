import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import api from '../../service/api';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const UpdateUser = ({navigation, route}) => {
  const {id, cpf, nome} = route.params;

  const [updateDetails, setUpdateDetails] = useState({
    cpf: '',
    nome: '',
  });

  useEffect(() => {
    setUpdateDetails({...updateDetails, cpf: cpf, nome: nome});
  }, []);

  const putEmployees = () => {
    const testeNet = NetInfo.addEventListener(async (state) => {
      if (state.isConnected) {
        api
          .put(`/funcionario/${id}`, updateDetails)
          .then((response) => {
            setUpdateDetails(response.data);
          })
          .catch((error) => {
            alert('ERROR.');
            console.log(error);
          });
        Alert.alert(`${updateDetails.nome} foi atualizado com sucesso.`);
        setUpdateDetails('');
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Offline',
          'Não é possível realizar essa operação sem conexão à internet',
        );
        navigation.navigate('Home');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Atualizar</Text>
        <Text style={styles.title}>Dados</Text>
      </View>
      <View style={styles.formBox}>
        <TextInput
          style={styles.nameInput}
          placeholder="Nome"
          defaultValue={nome}
          onChangeText={(text) =>
            setUpdateDetails({...updateDetails, nome: text})
          }
        />
        <TextInput
          style={styles.cpfInput}
          placeholder="CPF"
          defaultValue={cpf}
          onChangeText={(text) =>
            setUpdateDetails({...updateDetails, cpf: text})
          }
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button} onPress={() => putEmployees()}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#722AF7',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60,
  },
  title: {
    fontFamily: 'NotoSansTC-Bold',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 36,
  },
  formBox: {
    width: 300,
  },
  nameInput: {
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 10,
    paddingLeft: 15,
  },
  cpfInput: {
    backgroundColor: 'white',
    marginBottom: 150,
    borderRadius: 10,
    paddingLeft: 15,
  },
  buttonBox: {},
  button: {
    backgroundColor: '#DBC716',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'NotoSansTC-Bold',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateUser;
