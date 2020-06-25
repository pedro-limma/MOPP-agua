import React,{useState,useEffect, useMemo} from 'react';
import { Line } from 'react-chartjs-2';
//import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import socketioClient from 'socket.io-client';

import './styles.css';
import { FiTrash2 } from 'react-icons/fi'

import'./styles.css';


import api from '../../services/api';

function Medicao() {
  const [chartData,setChartData] = useState({});
  const [valores, setValores] = useState([]);
  const username = localStorage.getItem('username'); 

  let medias = [];
  let ids = [];

  valores.map(media => medias.push(media.media));//entendi 
  valores.map(id => ids.push(id.id));
  
  const chart = () => {
    setChartData({
      labels: ids,
      datasets:[
        {
          label:'Volume de água/Hora',
          data:  medias,
          borderWidth: 2,
          borderColor:['#4169e1']
      }
    ],
      options: {
        scales: {
          yAxes:[{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  useEffect(()=> {
      chart();
  },[]);

  

  const socket = useMemo(() => socketioClient('http://localhost:3333'), []);
//sim
  useEffect(async ()=> {
      await api.get('medicao').then( resp =>{
        setValores(resp.data);
      });
  },[]);

  function atualizarDados(){

  }

  return (
      <div className='profile-container'>
        <header>
            <img src={logo} alt='MoppAgua'/>
            <span>Bem vindo ao MoppAgua , uma nova alternativa de gestão e consumo da sua casa</span>
        </header>
        
        <h1>Usuário: {username}</h1>
        
          
        <Line data={chartData}/>
        <div className='dados'>
          <button className='button' type='button' onClick={() => atualizarDados()}>
            Atualizar
          </button>

          <p>Valor teste</p>
        </div>
    </div>
  )
}

export default Medicao;

 