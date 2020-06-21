import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.png';
export default function login(){
    return(
        <div className='login-container'>
            <div className="content">
                <img  src={logo} alt="MoppAgua"/>
                <section className='form'>
                    <form>
                        <h1 className='login'>Faça seu Login</h1>
                        <div className="inputGroup">
                            <input type='email' placeholder='Email' />
                            <input placeholder='Senha' type='password'/>
                        </div>
                        <button className='button' type='submit'>Entrar</button>
                        <Link className='.back-Link' to='/cadastro'>
                            <FiLogIn size={16} color='#E02041'/>
                            Não possui cadastro? Cadastre-se Agora
                        </Link>
                    </form>
                </section>
            </div>
        </div>
    );
}