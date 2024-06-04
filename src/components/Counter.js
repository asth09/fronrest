import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Counter = ({ initial = 0, onChange }) => {
  const [count, setCount] = React.useState(initial);
  const increment = () => {
    const counter = count + 1;
    setCount(counter);
    onChange(counter);
  };
  const decrement = () => {
    if (count !== 0) {
      const counter = count - 1;
      setCount(counter);
      onChange(counter);
    }
  };

  return (
    <View style={cardStyle.countContainer}>
      <Text style={cardStyle.textcount}>{count}</Text>
      <TouchableOpacity onPress={decrement}>
        <Text>
          <AntDesign name="minuscircle" size={35} color="#dc3545" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={increment}>
        <Text>
          <AntDesign name="pluscircle" size={35} color="#198754" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const cardStyle = StyleSheet.create({
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textcount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Counter;
