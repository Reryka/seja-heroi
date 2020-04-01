import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import LogoImg from '../../assets/logo.svg';

export default function NovoCaso() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNovoCaso(e){
    e.preventDefault();
    const data = {
      titulo,
      descricao,
      valor,
    };

    try {
      await api.post('caso',data, { 
        headers: {
          Authorization: ongId,
        } 
      })

      history.push('/profile');

    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }

  }

  return ( 
    <div className="casonovo-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Imagem da logo" />
          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleNovoCaso}>
          <input
            placeholder="Título do Caso" 
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />

          <textarea
            placeholder="Descrição"  
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />

          <input
            placeholder="Valor em reais" 
            value={valor}
            onChange={e => setValor(e.target.value)}
          />

          <div className="input-group">
            <button className="button-cancel" type="reset">Cancelar</button>
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
   )
  
}