import React, {useState} from 'react';
import Img from '../../assets/imgCadastro.svg';
import Header from '../../components/Header';
import api from '../../services/api';


import {
    Container,
    ContainerSecundary,
    FormContainer,
    Titleform,
    Form,
} from './styles';

const SignUp = () => {

    const [form, setForm] = useState(1);
    const [button, setButton] = useState('Avançar');
    const [userData, setUserData] = useState({
        cpf: "",
        dataNascimento: "",
        email: "",
        endereco: {
            bairro: "",
            cep: "",
            cidade: "",
            complemento: "",
            estado: "",
            numero: "",
            rua: "",
        },
        nome: "",
        usuario: "",
    });

    const handleFormChange = (e) => {
        e.preventDefault();
        if (form === 1) {
            setForm(2);
            setButton('Voltar')
        } else {
            setForm(1);
            setButton('Avançar')
        }
    }  

    const postData = () =>{             
        api.post('/cliente', userData)
        .then(response =>{
            alert('Cadastro realizado com sucesso!');
            window.location.href="/";
        }).catch(error => {
            alert('Cadastro não realizado!' + error);
        });
    }   
   
    const envio = (e) =>{
        e.preventDefault();       

        if(validationForm() === true){                  
            (postData());                                   
            
        }else{ 
            (validationForm());           
            alert('Não foi possivel realizar cadastro');
        }        
    }     
    
    const validationForm = () => {       

        if(userData.nome.length < 5 || userData.nome.length > 60){
            alert('O campo nome deve conter entre 5 e 60 dígitos.');
            return false;
        }

        if(userData.usuario.length < 6 || userData.usuario.length > 15){
            alert('O campo usuário deve conter entre 6 e 15 dígitos.');
            return false;
        }

        if(userData.cpf.length !== 11){
            alert('O campo CPF deve conter 11 dígitos.');
            return false;
        }

        if(userData.endereco.rua.length < 4 || userData.endereco.rua.length > 60){
            alert('O campo rua deve conter entre 4 e 60 dígitos.');
            return false;
        }

        if(userData.endereco.cidade.length < 3 || userData.endereco.cidade.length > 40){
            alert('O campo cidade deve conter entre 3 e 40 dígitos.');
            return false;
        } 

        return true;
    }    
    
    return (
        <Container>
            <Header />
            <ContainerSecundary>
                <img src={Img} alt="Imagem" />
                <FormContainer>
                    <Titleform>
                        <h2>Cadastro</h2>
                    </Titleform>
                    <Form onSubmit={envio}>
                        {form === 1 ?
                            <>
                                <input type="text" value={userData.nome} maxLength='60' placeholder="Nome"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, nome: event.target.value })}>
                                </input>

                                <input type="text" value={userData.usuario} minLength='6' maxLength='15' placeholder="Usuário"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, usuario: event.target.value })}>
                                </input>

                                <input type="text" value={userData.cpf} maxLength='11' placeholder="CPF"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, cpf: event.target.value })}>
                                </input>

                                <input type="date" placeholder="Data Nascimento"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, dataNascimento: event.target.value + 'T00:00:00Z' })}>
                                </input>

                                <input type="email" value={userData.email} placeholder="Email"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, email: event.target.value })}>
                                </input>

                                <button onClick={handleFormChange}>{button}</button>
                            </> :
                            <>
                                <input type="text" value={userData.endereco.rua} maxLength='60' placeholder="Rua"
                                    required
                                    onChange={event =>
                                        setUserData({
                                            ...userData, endereco:
                                                { ...userData.endereco, rua: event.target.value }
                                        })}>
                                </input>

                                <input type="text" value={userData.endereco.numero} placeholder="Numero" required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, numero: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.complemento} placeholder="Complemento"
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, complemento: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.bairro} placeholder="Bairro"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, bairro: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.cidade} maxLength='40' placeholder="Cidade"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, cidade: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.estado} maxLength='2' placeholder="Estado"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, estado: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.cep} maxLength='8' placeholder="CEP"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, cep: event.target.value }
                                    })}>
                                </input>

                                <div className="buttonArea">
                                    <button onClick={handleFormChange}>{button}</button>
                                    <button type="submit">Enviar</button>
                                </div>
                            </>
                        }
                    </Form>
                </FormContainer>
            </ContainerSecundary>
        </Container>
    );
}

export default SignUp;

