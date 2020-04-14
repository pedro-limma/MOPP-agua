import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
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