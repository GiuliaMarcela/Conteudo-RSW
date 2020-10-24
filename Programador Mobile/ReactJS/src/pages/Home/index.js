import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import {
  BottomContainer,
  Card,
  Icon,
  Title,
} from './styles';
import AccountIcon from '../../assets/account.svg';

const Home = () => {

  const [userResponse, setUserResponse] = useState([]);

  useEffect(() => {
    api.get(`/cliente`).then(response => setUserResponse(response.data));
  }, []);

  return (
    <>
      <Header />
      <Title>Clientes</Title>
      <BottomContainer>
        {userResponse.map((user) =>
          <Card key={user.id}>
            <Link to={`/user/${user.id}`}>
              <div>
                <h4>{user.id}. {user.nome}</h4>
                <p>@{user.usuario}</p>
                <Icon src={AccountIcon} />
              </div>
            </Link>
          </Card>
        )}
      </BottomContainer>
    </>
  );
}

export default Home;