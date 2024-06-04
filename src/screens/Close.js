import React from 'react';  
import { NavigationContainer } from "@react-navigation/native";  
import { createNativeStackNavigator } from "@react-navigation/native-stack";  
import { SafeAreaView } from 'react-native-safe-area-context';  
import { StatusBar } from 'react-native';  
 
 
import App from '../App'; 
 
const Stack = createNativeStackNavigator()  
export default function Close() {  
  return (  
    <>  
    <SafeAreaView>  
      <StatusBar backgroundColor={'#1f1f1f'} barStyle={'light-content'}/>  
    </SafeAreaView>  
    <NavigationContainer independent={true}>  
      <Stack.Navigator  screenOptions={{  
      headerStyle: {  
        backgroundColor: '#1f1f1f', // Aquí puedes definir tu color de fondo deseado  
      },  
      headerTintColor: '#fff', // Color del texto del encabezado  
      headerTitleStyle: {  
        fontWeight: 'bold',  
      },  
    }}>  
      <Stack.Screen initialRouteName='App' name='App' component={App}/> 
    
     
      </Stack.Navigator>  
    </NavigationContainer>  
    </>  
  )  
}