import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import wateringImg from '../assets/watering.png';  
import colors from "../styles/colors";


export function Welcome(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.tytle}>
        Gerencie suas plantas de forma fácil
      </Text>
      
      <Image source={wateringImg}/>

      <Text style={styles.subtytle}>
        Não esqueça   mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Text style={styles.button}>
         next 
      </Text>

    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 32,
    fontWeight:"bold",
    textAlign: "center",
    color: colors.heading


  }



});