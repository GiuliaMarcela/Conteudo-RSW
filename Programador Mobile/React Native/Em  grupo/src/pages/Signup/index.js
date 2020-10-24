import React, {useState} from 'react';
import api from '../../service/api.js';
import NetInfo from '@react-native-community/netinfo';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Signup = () => {
  const [novoFuncionario, setNovoFuncionario] = useState({
    cpf: '',
    nome: '',
  });

  const postFuncionario = () => {
    const testeNet = NetInfo.addEventListener(async (state) => {
      if (state.isConnected) {
        api
          .post('/funcionario', novoFuncionario)
          .then((response) => {
            alert(`${novoFuncionario.nome} cadastrado com sucesso.`);
            console.log(response.data);
            setNovoFuncionario('');
          })
          .catch((error) => {
            alert('Ops! Algo deu errado. Tente novamente mais tarde.');
            console.log(error);
          });
      } else {
        Alert.alert(
          'Offline',
          'Não é possível realizar essa operação sem conexão à internet',
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Cadastrar</Text>
        <Text style={styles.title}>Funcionário</Text>
      </View>
      <View style={styles.formBox}>
        <TextInput
          style={styles.nameInput}
          placeholder="Digite o nome..."
          value={novoFuncionario.nome}
          onChangeText={(text) =>
            setNovoFuncionario({...novoFuncionario, nome: text})
          }
        />
        <TextInput
          style={styles.cpfInput}
          placeholder="Digite o cpf..."
          value={novoFuncionario.cpf}
          onChangeText={(text) =>
            setNovoFuncionario({...novoFuncionario, cpf: text})
          }
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => postFuncionario()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
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
    backgroundColor: '#72E31A',
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

export default Signup;
