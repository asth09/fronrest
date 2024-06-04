import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/auth/Login";
import Navigator from "./src/screens/Navigator";
import OrdersProvider from "./src/context/Orders";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={"#1f1f1f"} barStyle={"light-content"} />
      </SafeAreaView>
      <OrdersProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#1f1f1f", // Aquí puedes definir tu color de fondo deseado
              },
              headerTintColor: "#fff", // Color del texto del encabezado
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
            <Stack.Screen
              name="Navigator"
              options={{ headerShown: false }}
              component={Navigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrdersProvider>
    </>
  );
}
