import React from "react";
import { Feather } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useOrdersContext } from "../context/Orders";

import Counter from "../components/Counter";

/**
 *
 * @param {[]} menus
 * @param {"Desayuno" | "Almuerzo" | "Bebidas"} type
 * @returns React.ReactNode
 */
const OrdersLayout = ({ menus, type }) => {
  const { mesas, clienteMesa, setClienteMesa, toggleAmount, handleOrdenar } =
    useOrdersContext();
  const navigation = useNavigation();

  if (!menus) return null;
  return (
    <FlatList
      data={menus}
      style={style.container}
      ListHeaderComponent={
        <TouchableOpacity
          style={style.buttonlisto}
          onPress={() => handleOrdenar(navigation.navigate)}
        >
          <Text style={style.buttonTextlisto}>Ordenar</Text>
          <Text style={style.buttonTextlisto}>
            <Feather name="arrow-right" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      }
      renderItem={({ item, index }) => (
        <View style={style.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MenuForm", { id: item._id })}
          >
            <Text style={style.text}>Nombre: {item.nombre}</Text>
            <Text style={style.text}>Descripcion: {item.descripcion}</Text>
            <Text style={style.text}>Precio: {item.precio}</Text>
            <Text style={style.text}>Tipo: {item.tipo}</Text>
            <Text style={style.text}>Ingredientes: {item.ingredientes}</Text>
            <Text style={style.text}>
              Disponibilidad: {item.disponibilidad}
            </Text>
            <Text style={style.text}>Existencia: {item.existencia}</Text>
          </TouchableOpacity>

          <View style={style.containercount}>
            <View style={style.containerselect}>
              <Text style={style.textcount}>Mesa numero</Text>
              <RNPickerSelect
                items={mesas}
                value={clienteMesa}
                placeholder={{}}
                onValueChange={(value) => setClienteMesa(value)}
              />
            </View>
            <Counter onChange={(value) => toggleAmount(index, value, type)} />
          </View>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
  container: {
    padding: 10,
    backgroundColor: "#424242",
  },
  box: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
  },
  buttonlisto: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#DD5731",
    borderRadius: 20,
    margin: 20,
    position: "relative",
    marginLeft: "65%",
  },
  buttonTextlisto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
  },
  textcount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  containercount: {
    alignItems: "flex-end",
    fontWeight: "bold",
    padding: 10,
    left: "70%",
    position: "absolute",
  },
  containerselect: {
    fontWeight: "bold",
  },
});

export default OrdersLayout;
