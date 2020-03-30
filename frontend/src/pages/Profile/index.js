import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower , FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Seja um Herói"/>
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/caso/novo">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>   

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} colot="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}