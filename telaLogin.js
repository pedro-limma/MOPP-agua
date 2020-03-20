import * as React from 'react';
import { Alert, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  clicou = () => {
    Alert.alert("Seu Login foi efetuado com secesso.");
  }
  render() {
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

        <TouchableOpacity >
          <Text style={styles.cadastroBotao}>Cadastre-se </Text> 
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#084B8A',
    padding: 70,
    alignItems: 'center',
  },

  logo: {
    width: 190,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
    margintop: 50,

  },

  loginTitulo: {
   fontSize: 50,
   color: 'white',
   marginBottom: 30,
  
  },

   input: {
     backgroundColor: "white",
     borderRadius:5,
     alignItems: 'center',
     marginTop: 10,
     height: 40,
     width: 300,
     fontSize: 16,
     fontWeight: "bold",
   },

  botao: {
    width: 100,
    height: 42,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',

  },

   botaoTexto: {
     fontSize: 16,
     fontWeight: 'bold',
     color: '#424242',
    
  },

   cadastroTexto: {
     fontSize: 16,
     color: 'black',
     marginBottom: 10,
    
  },

   cadastroBotao: {
     fontSize: 16,
     fontWeight: 'bold',
     color: 'lightblue',
     marginBottom: 10,
     textDecorationLine: 'underline',
     fontStyle: 'italic',
  },
  
});
