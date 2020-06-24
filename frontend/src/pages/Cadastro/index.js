import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.png'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [numberAdress, setNumberAdress] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function fazerCadastro(e){
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            numberAdress,
            cep,
            city,
            uf
        };

        try{
            const response = await api.post('users', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/')
        }
        catch(err){
            console.log(err);
            alert('Erro no cadastro tente novamente!');
        }
    }


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
                <form onSubmit={fazerCadastro}>
                    <input 
                        type='name' 
                        placeholder='Nome Completo' 
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type='email' 
                        placeholder='Email' 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder='Telefone' 
                        onChange={e => setPhone(e.target.value)}
                    />
                    <input 
                        placeholder='Nº endereço' 
                        onChange={e => setNumberAdress(e.target.value)}
                    />
                    <input
                        placeholder='CEP' 
                        onChange={e => setCep(e.target.value)}
                    />
                    <div className='input-group'>
                        <input
                            placeholder='Cidade' 
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder='UF' 
                            style={{width: 80}}
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}