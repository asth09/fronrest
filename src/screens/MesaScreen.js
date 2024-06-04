import {
  View,
  Text,
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { getMesas, deleteMesa } from "../api/mesas";

const MesaScreen = () => {
  const navigation = useNavigation();
  const [mesas, setMesas] = useState([]);
  const loadMesas = async () => {
    const data = await getMesas();
    setMesas(data);
  };
  const handleDelete = async (id) => {
    await deleteMesa(id);
    await loadMesas();
  };
  useEffect(() => {
    loadMesas();
  }, []);
  const handleDeletePress = (id) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que deseas eliminar este registro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => handleDelete(id),
        },
      ]
    );
  };
  return (
    <View style={cardStyle.container} >
        <FlatList
        data={mesas}
        renderItem={({ item }) => {
            return (
                <>
                <View  style={cardStyle.box}>
                <TouchableOpacity onPress={() => navigation.navigate('MesaForm', { id: item._id})}>
                <Text style={cardStyle.text}>Numesa: {item.numesa} </Text>
                <Text style={cardStyle.text}>Capacidad: {item.capacidad}</Text>
                <Text style={cardStyle.text}>Estado: {item.estado}</Text>
                <Text style={cardStyle.text}>Ubicacion: {item.ubicacion}</Text>
                <Text style={cardStyle.text}>Descripcion: {item.descripcion}</Text>
                <Text style={cardStyle.text}>Comentarios: {item.comentarios}</Text>
                <Text style={cardStyle.text}>Meseros: {item.mesero && item.mesero.usuario}</Text>
                </TouchableOpacity>

                <View style={cardStyle.countContainer}>
                  
                <TouchableOpacity 
                onPress={() =>  handleDeletePress(item._id)}>
                  <Text style={cardStyle.delete}><AntDesign name="delete" size={24} color="red" /></Text>
                </TouchableOpacity> 
                </View>
                </View>
                </>
            )
        }}
        />
    </View>
  );
};
const cardStyle = ({
  text: {
    fontWeight: 'bold',
  },
  container: {
      justifyContent: 'space-between', 
      alignItems: 'center',  
      backgroundColor: "#424242"
  },
  box: {
    width: 330,
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
  },
  card: {
    width: 370,
    height: 200,
    margin: 4,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    borderColor: "black",
  },
  cardBody: {
    marginTop: -41,
    justifyContent: 'space-between',
  },
  cardmenu: {
    fontWeight: 'bold',
  },
  countContainer: {
    flexDirection: "row",
    marginRight:100,
    alignItems: 'flex-end',
    fontWeight: 'bold',
    padding: 10,
    left: "95%",
    position: 'absolute',
    marginTop:140,
  },
  countContainertitulo: {
    marginLeft: 250,
  },
  cardTitle: {
    padding: 5,
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 200,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#198754',
    borderRadius: 100,
    alignItems: "center",
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: '#dc3545',
    borderRadius: 100,
    margin: 10,
    alignItems: "center",
  },
  buttonlisto: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#DD5731',
    borderRadius: 20,
    margin: 20,
    position: 'relative',
    marginLeft: "65%",

  },
  buttonTextlisto: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: "center"
  },
  textcount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 35,

  }, containercount: {
    alignItems: 'flex-end',
    fontWeight: 'bold',
    padding: 10,
    left: "70%",
    position: 'absolute',
  },
  menutitulo: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: "row",
  },
  FontAwesome: {
    marginTop: -10,
    flex: 1,
    fontSize: 40,
    marginLeft: 160,
  },
  containerselect: {
    fontWeight: 'bold',
  },
  delete: {
    fontWeight: "bold",
    marginTop: -70,
    left:"50%",
  }
});

export default MesaScreen;
