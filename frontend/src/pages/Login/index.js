import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.png';
export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function fazerLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('userId', id);
            localStorage.setItem('username', response.data.name);

            history.push('/medicao');
        }
        catch(err){
            console.log(err);
            alert('Falha no login, cheque seus dados e tente novamente.');
        }
    }



    return(
        <div className='login-container'>
            <div className="content">
                <img  src={logo} alt="MoppAgua"/>
                <section className='form'>
                    <form onSubmit={fazerLogin}>
                        <h1 className='login'>Faça seu Login</h1>
                        
                        <input
                            placeholder='Digite seu ID'
                            onChange={e => setId(e.target.value)} 
                        />
                        
                        <button className='button' type='submit'>Entrar</button>
                        <br></br>
                        <Link className='back-Link' to='/cadastro'>
                            <FiLogIn size={16} color='#E02041'/>
                            Não possui cadastro? Cadastre-se Agora
                        </Link>
                    </form>
                </section>
            </div>
        </div>
    );
}