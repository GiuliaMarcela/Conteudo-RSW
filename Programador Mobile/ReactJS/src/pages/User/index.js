import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import {
    Container,
    Title,
    FormContainer,
    Form,
    ButtonContainer,
    UserContainer,
    Info,
    ListContainer,
    InfoList,

} from './styles.js';

const User = () => {
    const [newData, setNewData] = useState({
        cpf: '',
        dataNascimento: '',
        email: '',
        endereco: {
            bairro: '',
            cep: '',
            cidade: '',
            complemento: '',
            estado: '',
            numero: '',
            rua: ''
        },
        nome: '',
        usuario: ''
    });    

    const { params } = useRouteMatch();
    useEffect(() => {
        api.get(`/cliente/${params.id}`).then(response => setNewData(response.data))
    }, [])

    const handleSubmit = () => {
       api.put(`/cliente/${params.id}`, newData).then(response => setNewData(response.data))
    }

    const handleClick = async () => {        
        await api.delete(`/cliente/${params.id}`);
        alert('Usuário deletado com sucesso!');        
    }

    return (
        <Container>
            <Header />
            <Title>Usuário Encontrado</Title>
            <UserContainer>
                <Info>
                    <ListContainer>
                        <InfoList>
                            <h1>{newData.nome}</h1>
                            <li>{newData.usuario}</li>
                            <li>{newData.cpf}</li>
                            <li>{newData.dataNascimento}</li>
                            <li>{newData.email}</li>
                            <h4>Endereço:</h4>
                            <li>{newData.endereco.rua}</li>
                            <li>{newData.endereco.numero}</li>
                            <li>{newData.endereco.bairro}</li>
                            <li>{newData.endereco.cidade}</li>
                            <li>{newData.endereco.estado}</li>
                            <li>{newData.endereco.complemento}</li>
                            <li>{newData.endereco.cep}</li>
                        </InfoList>
                    </ListContainer>
                </Info>
            </UserContainer>
            <FormContainer>
                <Form onSubmit={(handleSubmit)}>
                    <input type='text' placeholder='Nome...' onChange={event => setNewData({ ...newData, nome: event.target.value })}></input>

                    <input type='text' placeholder='Nome de Usuário...' onChange={event => setNewData({ ...newData, usuario: event.target.value })} ></input>

                    <input type='text' placeholder='CPF...' onChange={event => setNewData({ ...newData, cpf: event.target.value })} ></input>

                    <input type='date' placeholder='Data de Nascimento...' onChange={event => setNewData({ ...newData, dataNascimento: event.target.value })} ></input>

                    <input type='text' placeholder='Email...' onChange={event => setNewData({ ...newData, email: event.target.value })} ></input>

                    <input type='text' placeholder='CEP...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, cep: event.target.value } })} ></input>

                    <input type='text' placeholder='Rua...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, rua: event.target.value } })} ></input>

                    <input type='text' placeholder='Número...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, numero: event.target.value } })} ></input>

                    <input type='text' placeholder='Bairro...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, bairro: event.target.value } })} ></input>

                    <input type='text' placeholder='Cidade...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, cidade: event.target.value } })} ></input>

                    <input type='text' placeholder='Estado...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, estado: event.target.value } })} ></input>

                    <input type='text' placeholder='Complemento...' onChange={event => setNewData({ ...newData, endereco: { ...newData.endereco, complemento: event.target.value } })} ></input>

                    <ButtonContainer>
                        <button type='submit'>Update</button>
                        <Link to="/" ><button onClick={(handleClick)}>Delete</button></Link>
                    </ButtonContainer>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default User;
