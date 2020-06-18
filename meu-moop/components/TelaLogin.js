import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground,KeyboardAvoidingView,TextInput, TouchableOpacity  } from 'react-native';

export default function TelaLogin() {
  return (
   <KeyboardAvoidingView>
    <ImageBackground
     source={require('../assets/TalaLogin2.png')}
     style={{width: '100%', height: '100%' , }} >
      <View style={styles.conteiner} >

      
       </View>

       <View  style={styles.conteiner2}>
       <TextInput
       style={styles.input} 
       placeholder="Email"
       autoCorrect={false}
       onChangeText={()=>{}}
       />
       
       <TextInput 
       style={styles.input}
       placeholder="Senha"
       autoCorrect={false}
       type="password"
       minlength="8"
       secureTextEntry={true}
       
       onChangeText={()=>{}}
       />
     
       <TouchableOpacity   style={styles.btnsubmit} >
       <Text  style={styles.textsubmit} > Entrar </Text>
       </TouchableOpacity>
       </View>
    
    </ImageBackground> 
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  conteiner:{

   justifyContent:'center',
     flex:1,
   },
   conteiner2:{
     flex:1,
     alignItems:"center"
   },
   input:{
     marginTop:25,
     backgroundColor:"#b0b0b0",
     width:"90%",
     height:"17%" ,    
     fontSize:18,
     borderRadius:10,
     padding:10,
     color:'white'
   },
   btnsubmit:{
     marginTop:35,
     backgroundColor:'#252525',
     width:"90%",
     height:"18%" ,
     borderRadius:10,
     alignItems:'center',
     justifyContent:"center",
   },
   textsubmit:{
     color:'white',
     fontSize:18
   },



   });