import React from 'react';
import { Link } from 'react-router-dom';
//import { } from 'react-icons/fi';

import './styles.css';

export default function Notices() {
  return (
    <div className="notice-container">
      <header>
        <span>Avisos</span>
      </header>
      <div className="content">
        <ul>
          <li>
            <strong>TITULO:</strong>
            <p>Titulo teste</p>
            
            <strong>DESCRIÇÃO:</strong>
            <p>Descricao teste</p>
            
            <strong>VALOR:</strong>
            <p>5000 m³</p>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
