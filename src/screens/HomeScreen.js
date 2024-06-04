import React, { useState } from 'react'; 
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native'; 
import { useNavigation } from "@react-navigation/native"; 
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
 
const HomeScreen = () => { 
 
  const [usuario, setUsuario] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigation = useNavigation(); 
  
     
  return ( 
    <> 
     <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='handled' overScrollMode='never'> 
     <Image 
          style={styles.head} 
          source={require("../../assets/head.png")} 
        /> 
        <Text  style={styles.titulo} >Home</Text> 
         <View style={[styles.container]}>
         <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MenuScreen")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Menu del dia</Text>
              </Text>
              <Entypo
                style={styles.icontext}
                name="add-to-list"
                color="white"
              />
              <View></View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MesaScreen")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Mesa</Text>
              </Text>
              <Entypo
                style={styles.icontext}
                name="add-to-list"
                color="white"
              />
              <View></View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Desayunos")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Desayunos</Text>
              </Text>
              <FontAwesome5
                style={styles.icontext}
                name="coffee"
                color="white"
              />
              <View></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Almuerzos")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Almuerzos</Text>
              </Text>
              <FontAwesome5
                style={styles.icontext}
                name="utensils"
                color="white"
              />

              <View></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bebidas")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Bebidas</Text>
              </Text>
              <MaterialCommunityIcons
                style={styles.icontext}
                name="cup"
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
         </View>
    </ScrollView> 
    </> 
    
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    marginTop: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: "#ffff" 
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
  card: {
    width: 370,
    height: 80,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
    padding: 10,
    backgroundColor: '#DD5731',
    borderRadius: 20,
    borderColor:"white",
  },
  cardBody: {
    flex:1,
    alignItems: 'center',
    marginTop:-41,
    justifyContent: 'space-between',
  },
  
  cardTitle: {
    marginTop:40,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 190,
    color:"#ffffff",
  },
  titulo:{ 
    padding: 2, 
    fontSize:30, 
    fontWeight: 'bold', 
  }, 
  notifi:{
   fontSize:15,
     backgroundColor: '#dc3545',
     borderCurve:10,
     borderRadius:50,
    color:"#fff",
  },
  icontext:{
    flex:1,
    marginTop:-20,
    marginRight:-250,
    fontSize:45
  },
  scrollView: {
    backgroundColor:"#ffff",
  },
}); 
 
export default HomeScreen;