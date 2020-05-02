import * as React from 'react';
import { 
  Alert,
  Text,
  View, 
  Image, 
  TextInput, 
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import styles from './styles';

export default function Login(){
  const navigation = useNavigation();

  function navigateToCadastro(){
    navigation.navigate('Cadastro')
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.loginTitulo}>Login:</Text> 
      < Image
      style={styles.logo}
        source = {{uri:'https://i.imgur.com/js2smM5.jpg'}}
      />
      
      <TextInput  
        style={styles.input}
        placeholder = " Digite seu email"
        />

        <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder = " Digite sua senha"
        />

      <TouchableOpacity 
        style={styles.botao} 
        onPress={ () => {this.clicou} }>
        <Text style={styles.botaoTexto} >Login</Text>
      </TouchableOpacity>

      <Text style={styles.cadastroTexto}>Ainda não é cadastrado? </Text> 

      <TouchableOpacity onPress={navigateToCadastro}>
        <Text style={styles.cadastroBotao}>Cadastre-se </Text> 
      </TouchableOpacity>
    </View>
  );
}

