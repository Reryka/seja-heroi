import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import LogoImg from '../../assets/logo.svg';

export default function NovoCaso() {
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
        <form>
          <input placeholder="Título do Caso" />
          <textarea placeholder="Descrição"  />
          <input placeholder="Valor em reais" />
          <div className="input-group">
            <button className="button-cancel" type="reset">Cancelar</button>
            <button className="button" type="submit">Cadastrar</button>
          </div>

          

        </form>
      </div>
    </div>
   )
  
}