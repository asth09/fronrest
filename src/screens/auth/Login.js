import React, { useState } from 'react'; 
import { View, Image, StyleSheet, TouchableOpacity, TextInput, Text,ScrollView} from 'react-native'; 
import { useNavigation } from "@react-navigation/native"; 
import Navigator from '../Navigator'; 
 
const Login = () => { 
 
  const [usuario, setUsuario] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigation = useNavigation(); 
 
  const handleLogin = async() => { 
    try { 
      const response = await fetch('http://192.168.1.106:3000/api/login', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ usuario, password }), 
      }); 
 
      if (response.ok) { 
        console.log('Inicio de sesión exitoso'); 
        setError(''); 
        navigation.navigate("Navigator") 
      } else { 
        setError('Usuario o contraseña incorrectos'); 
      } 
    } catch (error) { 
      console.error('Error al iniciar sesión:', error); 
      setError('Error al iniciar sesión'); 
    } 
  }; 
     
  return ( 
    <> 
     <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='handled' overScrollMode='never'> 
     <Image 
          style={styles.head} 
          source={require("../../../assets/head.png")} 
        /> 
        <Text  style={styles.titulo} >Login</Text> 
       
    <View style={styles.container}> 
   
    </View> 
    <View style={styles.container1}> 
       
      <TextInput 
        style={styles.input} 
        placeholder="Usuario" 
        value={usuario} 
        onChangeText={setUsuario} 
      /> 
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        secureTextEntry={true} 
        value={password} 
        onChangeText={setPassword} 
      /> 
      <TouchableOpacity style={styles.button} onPress={handleLogin}> 
        <Text style={styles.buttonText}>Iniciar sesión</Text> 
      </TouchableOpacity> 
      {error ? <Text style={styles.error}>{error}</Text> : null} 
    </View>  
     
     
    </ScrollView> 
    </> 
    
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    marginTop:-20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:"#fffff" 
  }, 
  image: { 
    marginHorizontal:21, 
    width: 350, 
    height: 350, 
    borderRadius:360, 
    borderColor:"#fff", 
    borderWidth:60, 
    marginTop:-60, 
  }, 
  head:{ 
    height:200,  
    width:"auto", 
    marginTop:-10 
         
  }, 
  container1: { 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  title: { 
    fontSize: 24, 
    right:80, 
    fontWeight: 'bold', 
   
  }, 
  titulo:{ 
    marginTop:1, 
    padding:38, 
    fontSize:30, 
    fontWeight: 'bold', 
  }, 
  input: { 
    width: '80%', 
    height: 40, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 10, 
      fontWeight: 'bold', 
  }, 
  button: { 
    backgroundColor: '#ff6b00', 
    padding: 10, 
    borderRadius: 10, 
    marginTop:4, 
  }, 
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
  }, 
  error: { 
    color: 'red', 
    marginTop: 10, 
  }, 
  scrollView: { 
    backgroundColor:"#fff" 
 
  }, 
}); 
 
export default Login;