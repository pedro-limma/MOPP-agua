import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/LOGO.png';
export default function login(){
    return(
        <div className='login-container'>
            <section className='form'>

            </section>
                <img  src={logo} alt="MoppAgua"/>

                <form>
                    <h1 className='login'>Faça seu Login</h1>
                    <input type='email' placeholder='Email' />
                    <input placeholder='Senha' type='password'/>
                    <Link className='button' type='submit'>Entrar</Link>
                    <Link className='.back-link' to='/Registrar'>
                        <FiLogIn size={16} color='#E02041'/>
                        Não possui cadastro? Cadastre-se Agora
                    </Link>
                </form>
        </div>
    );
}