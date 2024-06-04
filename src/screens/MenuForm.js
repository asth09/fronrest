import React, { useState, useEffect } from 'react';  
import { View, Text, TextInput, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';  
import { saveMenu, getMenu, updateMenu } from "../api/menu"; 
import { Card } from 'react-native-paper'; 
 
const MenuForm = ({ navigation, route }) => { 
  const [nombre, setNombre] = useState(''); 
  const [descripcion, setDescripcion] = useState(''); 
  const [precio, setPrecio] = useState(''); 
  const [tipo, setTipo] = useState(''); 
  const [ingredientes, setIngredientes] = useState(''); 
  const [disponibilidad, setDisponibilidad] = useState(''); 
  const [existencia, setExistencia] = useState(''); 
  const [error, setError] = useState(''); 
  const [editing, setEditing] = useState(false); 
 
  const handleSubmit = async () => { 
    try { 
      const response = editing ?  
        await updateMenu(route.params.id, { nombre, descripcion, precio, tipo, ingredientes, disponibilidad, existencia }) : 
        await saveMenu({ nombre, descripcion, precio, tipo, ingredientes, disponibilidad, existencia }); 
   
      if (response) { 
        console.log('Registro exitoso'); 
        setError(''); 
        navigation.navigate('MenuScreen'); 
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
      navigation.setOptions({ headerTitle: 'Actualizar menu'}); 
      setEditing(true);  
      const fetchData = async () => { 
        try { 
          const data = await getMenu(route.params.id); 
          setNombre(data.nombre); 
          setDescripcion(data.descripcion); 
          setPrecio(data.precio.toString()); 
          setTipo(data.tipo); 
          setIngredientes(data.ingredientes); 
          setDisponibilidad(data.disponibilidad); 
          setExistencia(data.existencia.toString()); 
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
     
     <Text  style={{color: 'grey',fontWeight: 'bold', fontSize: 18,marginLeft:30,marginTop:10}}>Crear menu</Text> 
 
     
      <TextInput placeholder="Nombre" 
        style={styles.input}  
        value={nombre}  
        onChangeText={setNombre}  
        placeholderTextColor="grey" 
      /> 
      <TextInput placeholder="Descripcion" 
        style={styles.input}  
        value={descripcion}  
        onChangeText={setDescripcion}  
        placeholderTextColor="grey" 
      />  
      <TextInput placeholder="tipo:Desayuno,Almuerzo,Bebida" 
        style={styles.input}  
        value={tipo}  
        onChangeText={setTipo}  
        placeholderTextColor="grey" 
 
      /> 
       
      <TextInput placeholder="Precio" 
        style={styles.input}  
        value={precio}  
        onChangeText={setPrecio}  
        keyboardType="numeric"  
        placeholderTextColor="grey" 
      />  
        
      
      <TextInput placeholder='Ingredientes' 
        style={styles.input}  
        value={ingredientes}  
        onChangeText={setIngredientes} 
        placeholderTextColor="grey"  
      />  
      <TextInput placeholder='Disponibilidad' 
        style={styles.input}  
        value={disponibilidad}  
        onChangeText={setDisponibilidad}  
        placeholderTextColor="grey" 
      />  
      <TextInput placeholder='Existencia' 
        style={styles.input}  
        value={existencia}  
        onChangeText={setExistencia}  
        keyboardType="numeric"  
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
  
export default MenuForm;