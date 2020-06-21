import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
//import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

import './styles.css';
import { FiTrash2 } from 'react-icons/fi'

import'./styles.css';

function Medicao() {
  const [chartData,setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
            datasets:[{
                label:'Volume de água/Hora',
                data:[0,0,0,0,0,0,0,0,0,20,15,2,3,6,8,7,9,5,6,3,1,2,5,8],
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
        })
    }
        useEffect(()=> {
            chart()
        },[]) 

  return (
      <div className='profile-container'>
        <header>
            <img src={logo} alt='MoppAgua'/>
            <span>Bem vindo ao MoppAgua , uma nova alternativa de gestão e consumo da sua casa</span>
        </header>
        
        <h1>Username</h1>

        <ul>
            <li>

                <Line data={chartData}/>

                <strong>Nome:</strong>
                <p>Nome teste</p>

                <strong>Matrícula:</strong>
                <p>Matrícula teste</p>

                <strong>CPF:</strong>
                <p>CPF teste</p>

                <strong>Endereço:</strong>
                <p>Endereço teste</p>

                <strong>RG:</strong>
                <p>RG teste</p>

                <strong>Estado:</strong>
                <strong>Estado Teste</strong>

            

                <button type='button'>
                    <FiTrash2 size={20} color='#a8a8b3' />
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Medicao;