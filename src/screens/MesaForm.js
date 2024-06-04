import React, { useState, useEffect } from 'react';  
import { View, Text, TextInput, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';  
import { saveMesa, getMesa, updateMesa } from "../api/mesas"; 
import { Card } from 'react-native-paper'; 
 
const MesaForm = ({ navigation, route }) => { 
  const [numesa, setNumesa] = useState(''); 
  const [capacidad, setCapacidad] = useState(''); 
  const [estado, setEstado] = useState(''); 
  const [ubicacion, setUbicacion] = useState(''); 
  const [descripcion, setDescripcion] = useState(''); 
  const [comentarios, setComentarios] = useState(''); 
  const [error, setError] = useState(''); 
  const [editing, setEditing] = useState(false); 
 
  const handleSubmit = async () => { 
    try { 
      const response = editing ?  
        await updateMesa(route.params.id, { numesa, capacidad, estado, ubicacion, descripcion, comentarios }) : 
        await saveMesa({ numesa, capacidad, estado, ubicacion, descripcion, comentarios }); 
   
      if (response) { 
        console.log('Registro exitoso'); 
        setError(''); 
        navigation.navigate('MesaScreen'); 
      } else { 
        setError('Error al enviar los datos'); 
      } 
    } catch (error) { 
      console.error('Error al enviar los datos:', error); 
      setError('Error al enviar los datos'); 
    } 
  }; 
  useEffect(() => { 
    if (route.params && route.params.id) { 
      navigation.setOptions({ headerTitle: 'Actualizar mesa'}); 
      setEditing(true);  
      const fetchData = async () => { 
        try { 
          const data = await getMesa(route.params.id); 
          setNumesa(data.numesa.toString()); 
          setCapacidad(data.capacidad.toString()); 
          setEstado(data.estado); 
          setUbicacion(data.ubicacion); 
          setDescripcion(data.descripcion); 
          setComentarios(data.comentarios);  
        } catch (error) { 
          console.error('Error al obtener los datos:', error); 
        } 
      }; 
 
      fetchData(); 
    } 
  }, []); 
  
  return (  
    <ScrollView style={styles.scrollView}   overScrollMode='never'> 
 
    <View style={styles.container}>  
    <Card  style={styles.card}> 
     
     <Text  style={{color: 'grey',fontWeight: 'bold', fontSize: 18,marginLeft:30,marginTop:10}}>Crear mesa</Text> 
 
     
      <TextInput placeholder="Numesa" 
        style={styles.input}  
        value={numesa}  
        onChangeText={setNumesa}
        keyboardType="numeric"  
        placeholderTextColor="grey" 
      /> 
      <TextInput placeholder="Capacidad" 
        style={styles.input}  
        value={capacidad}  
        onChangeText={setCapacidad}
        keyboardType="numeric"  
        placeholderTextColor="grey" 
      />  
      <TextInput placeholder="Ubicacion" 
        style={styles.input}  
        value={ubicacion}  
        onChangeText={setUbicacion}  
        placeholderTextColor="grey" 
 
      /> 
       
      <TextInput placeholder="Estado" 
        style={styles.input}  
        value={estado}  
        onChangeText={setEstado}    
        placeholderTextColor="grey" 
      />  
        
      
      <TextInput placeholder='Descripcion' 
        style={styles.input}  
        value={descripcion}  
        onChangeText={setDescripcion} 
        placeholderTextColor="grey"  
      />  
      <TextInput placeholder='Comentarios' 
        style={styles.input}  
        value={comentarios}  
        onChangeText={setComentarios}  
        placeholderTextColor="grey" 
      />   
      <Text>      </Text> 
    </Card>  
      { 
        !editing ? ( 
          <TouchableOpacity style={styles.button} onPress={handleSubmit}> 
            <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity> 
        ) : ( 
          <TouchableOpacity style={styles.button} onPress={handleSubmit}> 
            <Text style={styles.buttonText}>Actualizar</Text> 
          </TouchableOpacity> 
        ) 
      } 
      {error ? <Text style={styles.error}>{error}</Text> : null} 
 
</View  > 
           
 
</ScrollView> 
  );  
};  
 
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center', 
    backgroundColor:"#ededed", 
    
  },  
  card: { 
     
    fontWeight: 'bold', 
    backgroundColor: '#fff', 
    width:"85%", 
    marginTop:16, 
     
  },  
 
  input: {  
    marginTop:10, 
    width: '80%', 
    height: 40, 
    borderWidth: 1, 
    borderColor: 'grey', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 10, 
    fontWeight: 'bold',   
    color: 'grey', 
    marginLeft:30     
  },  
  error: {  
    color: 'red',  
    marginTop: 10,  
  },  
  button: { 
    backgroundColor: '#DD5731', 
    padding: 10, 
    borderRadius: 10, 
    marginTop:10, 
  }, 
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
  }, 
    textcount:{ 
   flexDirection:"row", 
 
    }, 
    textcount:{ 
      flexDirection:"row", 
      color: '#fff',  
      fontWeight: 'bold',   
       }, 
       row: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 10, 
       }, 
       scrollView: { 
        backgroundColor:"#ededed", 
    }, 
}); 
  
export default MesaForm;