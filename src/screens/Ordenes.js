import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useOrdersContext } from "../context/Orders";
import { savePedidos } from "../api/pedidos";

const Ordenes = () => {
  const navigation = useNavigation();
  const { ordenes, setOrdenes } = useOrdersContext();
  const [clienteMesa, setClienteMesa] = React.useState(undefined);
  const [mesas, setMesas] = React.useState([]);

  const handleRealizarPedidos = async () => {
    try {
      await savePedidos( ordenes ); // Envía los menús al backend con el nombre "menus"
      console.log('Menús guardados exitosamente');
      navigation.navigate("PedidoScreen")
    } catch (error) {
      console.error('Error al guardar los menús:', error);
    }
  };

  const handleEliminarElemento = (categoria, index) => {
    setOrdenes(prevOrdenes => ({
      ...prevOrdenes,
      [categoria]: prevOrdenes[categoria].filter((_, i) => i !== index),
    }));
  };

  const verOrdenes = () => {
    alert(JSON.stringify(ordenes));
  };
  

  const ordenDesayuno = ordenes.desayuno
  const ordenAlmuerzo = ordenes.almuerzo 
  const ordenBebidas = ordenes.bebidas 

  return (
    <>
    <ScrollView style={styles.scrollView} overScrollMode="never">
       <View style={styles.countContainertitulo}>
          <TouchableOpacity style={styles.buttonlisto}>
            <Text
              style={styles.buttonTextlisto}
              onPress={handleRealizarPedidos}
            >
              Mesa: 1   Ordenar
            </Text>
            <Text style={styles.buttonTextlisto}>
              <Feather name="arrow-right" size={25} color="white" />
            </Text>
          </TouchableOpacity>
       </View> 
      
      <View style={styles.container}>
    
        <Text style={styles.textcount2}>Desayuno seleccionadas </Text>
      
        {ordenDesayuno.map((order, index) => ( 
          <View key={index} style={[styles.card]}> 
            
              <Text style={styles.cardTitle}>{order.nombre}</Text> 
              <Text style={styles.cardmenu}>{order.descripcion}</Text> 
              <Text style={styles.cardmenu}>Precio total: {order.precio * order.amount}</Text>
              <View> 
                <View style={styles.containercount}> 
                  <View style={styles.countContainer}> 
                    <Text>Cantidad:{order.amount}</Text> 
                  </View>
                </View> 
              </View>
              <TouchableOpacity onPress={() => handleEliminarElemento('desayuno', index)}>
                <Text style={styles.delete}><AntDesign name="delete" size={24} color="red" /></Text>
              </TouchableOpacity>
          </View> 
        ))}
      </View>

     <View style={styles.container}>
        <Text style={styles.textcount2}>Almuerzo seleccionadas</Text>
        {ordenAlmuerzo.map((order, index) => ( 
          <View key={index} style={[styles.card]}> 
            <View style={styles.cardBody}> 
              <Text style={styles.cardTitle}>{order.nombre}</Text> 
              <Text style={styles.cardmenu}>{order.descripcion}</Text> 
              <Text style={styles.cardmenu}>Precio total: {order.precio * order.amount}</Text>
              <View> 
                <View style={styles.containercount}> 
                  <View style={styles.countContainer}> 
                    <Text>Cantidad: {order.amount}</Text> 
                  </View> 
                </View> 
              </View> 
            </View> 
            <TouchableOpacity onPress={() => handleEliminarElemento('almuerzo', index)}>
              <Text style={styles.delete}><AntDesign name="delete" size={24} color="red" /></Text>
            </TouchableOpacity>
          </View> 
        ))}
     </View> 
         <View style={styles.container}>
      <Text style={styles.textcount2}>Bebidas seleccionadas</Text>
      {ordenBebidas.map((order, index) => ( 
        <View key={index} style={[styles.card]}> 
          <View style={styles.cardBody}> 
            <Text style={styles.cardTitle}>{order.nombre}</Text> 
            <Text style={styles.cardmenu}>{order.descripcion}</Text> 
            <Text style={styles.cardmenu}>Precio total: {order.precio * order.amount}</Text>
            <View> 
              <View style={styles.containercount}> 
                <View style={styles.countContainer}> 
                  <Text>Cantidad: {order.amount}</Text> 
                </View> 
              </View> 
            </View> 
          </View> 
          <TouchableOpacity onPress={() => handleEliminarElemento('bebidas', index)}>
            <Text style={styles.delete}><AntDesign name="delete" size={24} color="red" /></Text>
          </TouchableOpacity>
        </View> 
      ))}
        </View> 
     <View style={styles.container}>
        <View style={styles.containerselect}>
          <Text style={styles.textcount1}>Metodo de pago</Text>
          <RNPickerSelect
            items={[
                { label: 'EFECTIVO', value: 'EFECTIVO' },
                { label: 'PAGO_MOVIL', value: 'PAGO_MOVIL' },
                { label: 'TRANSFERENCIA', value: 'TRANSFERENCIA' },
                { label: 'DIVISAS', value: 'DIVISAS' }
            ]}
            value={ordenes.metodoPago}
            placeholder={{ label: 'Seleccionar método de pago', value: null }}
            onValueChange={(value) => setOrdenes({ ...ordenes, metodo: value })}
          />

        </View>
     </View>
     <TouchableOpacity style={styles.buttonlisto1}>
            <Text
              style={styles.buttonTextlisto1}
              onPress={verOrdenes}
            >
              Enviar notificacion
            </Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: "#ffff",
    borderRadius:20,
    margin:10,
    width:"auto",
  },
  card:{
    margin:5,
    marginLeft:40,
  },
  scrollView: {
    backgroundColor:"#424242",
  },
  box:{
    height:"auto",
    width:"90%",
    alignItems:"center",
    borderRadius:20,
  },
  
  cardmenu: {
    fontWeight: "bold",
    marginRight:"50%",
  },
  countContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    right: 10,
  },
 
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight:"50%",
    paddingLeft:1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#198754",
    borderRadius: 100,
    margin: 10,
    alignItems: "center",
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: "#dc3545",
    borderRadius: 100,
    margin: 10,
    alignItems: "center",
  },
  buttonlisto: {
    flexDirection: "row",
    fontSize: 15,
    right:-115,
    fontWeight: "bold",
    backgroundColor: "#DD5731",
    borderRadius: 15,
    padding: 5,
    margin: 8,
    height:41,
    width:230,
  },
  buttonlisto1: {
    flexDirection: "center",
    fontSize: 15,
    right:-60,
    fontWeight: "bold",
    backgroundColor: "#DD5731",
    borderRadius: 15,
    padding: 5,
    margin: 8,
    height:41,
    width:230,
  },
  buttonTextlisto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
  },
  buttonTextlisto1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
  },
  textcount: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
  },
  containercount: {
    position:"absolute",
    fontWeight: "bold",
    marginTop: -90,
    left:"80%",
  },
  menutitulo: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "row",
  },
  FontAwesome: {
    marginTop: -10,
    flex: 1,
    fontSize: 40,
    marginLeft: 160,
  },
  containerselect: {
    fontWeight: "bold",
  },
  delete: {
    fontWeight: "bold",
    marginTop: -50,
    left:"90%",
  },
  textcount1: {
    fontSize: 25,
    fontWeight: "bold",
    left:"20%"
  },
  textcount2: {
    fontSize: 20,
    fontWeight: "bold",
    left:"17%"
  },
});

export default Ordenes;
