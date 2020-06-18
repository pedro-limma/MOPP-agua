import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground,KeyboardAvoidingView,TextInput, TouchableOpacity  } from 'react-native';

export default function Telarosto() {
   return (
     <KeyboardAvoidingView>

     <ImageBackground
     source={require('../assets/telarostof.png')}
     style={{width: '100%', height: '100%' , }} >

      <View  style={styles.conteiner}>
      <Text style={styles.vrtext}>nova </Text>
      <Text style={styles.vrtext2}>alternativa </Text>
      <Text style={styles.vrtext2}>de gestao </Text>
      <Text style={styles.vrtext2}>e consumo</Text>
      <Text style={styles.vrtext2}>da sua casa</Text>
     
      </View>

   
  <View style={styles.box2} >  

     <View style={styles.viewbuton} >
      <TouchableOpacity   style={styles.btnpreto} >
      <Text  style={styles.textsubmit} > Login </Text>
      </TouchableOpacity>
      
      <TouchableOpacity   style={styles.btnpreto2} >
      <Image source={require('../assets/faceid.png')}  style={{width: '90%', height: '100%',                 borderRadius:10, }}/>
      </TouchableOpacity>
     
      </View>
      
      <View   style={styles.viewbuton2}>
      <TouchableOpacity style={styles.btnazul}>
      <Text  style={styles.textsubmit}>  Register </Text>
      </TouchableOpacity>
      </View>
     
   
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

  vrtext2:{
  alignItems:'center',
  fontSize:"35%",
  color:'#707070',
  height:50,
  marginLeft:25,
  fontWeight: "Rockwell"
  
 },

  vrtext:{
  fontSize:"35%",
  color:'#707070',
  alignItems:'center',
  marginTop:140,
  marginLeft:25,
  fontWeight: "Rockwell"
 
 },

  box2:{
  flex:0.5,
  justifyContent:"center", 
  },

  viewbuton:{
  flexDirection:"row",
  justifyContent:"center",
  },

  btnpreto:{
  backgroundColor:'#252525',
  width:"60%",
  height:50 ,
  borderRadius:10,
  alignItems:'center',
  justifyContent:"center",
  
  
  },

  btnpreto2:{
  width:"20%",
  height:50,
  borderRadius:10,
  marginLeft:12,
  alignItems:'center'

  },

  textsubmit:{
  color:'white',
  fontSize:18
  },
  
 
  btnazul:{
  backgroundColor:"#015F9D",
  width:"85%",
  height:"50%" ,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center",
  marginLeft:20
  
  
  },
  
  viewbuton2:{
  justifyContent:"center",

  },
  
  
  

});
