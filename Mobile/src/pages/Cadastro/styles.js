import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#084B8A',
    padding: 70,
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 95,
    borderRadius: 100,
    marginBottom: 20,
    margintop: 50,

  },

  loginTitulo: {
   fontSize: 25,
   color: 'white',
   marginBottom: 30,
  
  },

   input: {
     backgroundColor: "white",
     borderRadius:5,
     alignItems: 'center',
     marginTop: 10,
     height: 35,
     width: 295,
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

 
});