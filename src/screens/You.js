import React from 'react'
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
const { mesas, clienteMesa, setClienteMesa, toggleAmount, handleOrdenar } =
    useOrdersContext();
const navigation = useNavigation();
function You() {
  return (
    <View>
      <RNPickerSelect
                items={mesas}
                value={clienteMesa}
                placeholder={{}}
                onValueChange={(value) => setClienteMesa(value)}
              />
    </View>
  )
}

export default You