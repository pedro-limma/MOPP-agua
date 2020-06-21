import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.png'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt='MoppAgua'/>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro e entre para o Mopp Água</p>

                    <Link className='.back-Link' to='/'>
                        <FiArrowLeft size={16} color='#E02041'/>
                         Voltar para a página inicial
                    </Link>
                </section>
                <form>
                    <input type='name' placeholder='Nome Completo'></input>
                    <input type='email' placeholder='Email'></input>
                    <input type='password' placeholder='Senha'></input>
                    <input type='password' placeholder='Confirmar Senha'></input>
                    <input type='RG' placeholder='CPF'></input>
                    <div className='input-group'>
                        <input placeholder='Cidade'></input>
                        <input placeholder='UF' style={{width: 80}}></input>
                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}