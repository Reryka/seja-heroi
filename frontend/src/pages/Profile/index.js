import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower , FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [casos, setCasos] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongNome = localStorage.getItem('ongNome');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setCasos(response.data);
    })
  }, [ongId]);

  async function handleExcluirCaso(id){
    try {
      await api.delete(`caso/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setCasos(casos.filter(caso => caso.id !== id));

    } catch (error) {
      alert('Erro ao deletar Caso. Tente novamente.')
    }
  }

  function handleLogout(){
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Seja um Herói"/>
        <span>Bem vinda, {ongNome}</span>

        <Link className="button" to="/caso/novo">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>   

      <h1>Casos Cadastrados</h1>

      <ul>
        {casos.map(caso => (
          <li key={caso.id}>
          <strong>Caso:</strong>
          <p>{caso.titulo}</p>

          <strong>Descrição:</strong>
          <p>{caso.descricao}</p>

          <strong>Valor:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style : 'currency', currency: 'BRL' }).format(caso.valor)}</p>

          <button type="button" onClick = {() => handleExcluirCaso(caso.id)}>
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}