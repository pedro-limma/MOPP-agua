import api from '../../services/api'; 
import * as React from 'react';
import { Alert, Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

import styles from './styles';

export default function Cadastro(){
  function handleCadastro(){
    
  }
  
  return (
    <View style={styles.tela}>
      <Text style={styles.loginTitulo}>Cadastro:</Text> 
      < Image
      style={styles.logo}
        source = {{uri:'https://i.imgur.com/js2smM5.jpg'}}
      />
      
      <TextInput  
        style={styles.input}
        placeholder = " Nome:"
        />

        <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder = " Email:"
        />

            <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder = " Celular/telefone:"
        />

                <TextInput  
        style={styles.input}
        placeholder = " UF:"
        />

        <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder = " Cidade:"
        />

            <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder = " CEP:"
        />

      <TouchableOpacity 
        style={styles.botao} 
        onPress={ handleCadastro }>
        <Text style={styles.botaoTexto} >Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

