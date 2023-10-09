import React from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { EnviromentButton } from "../components/EnviromentButton";
export function PlantSelect(){
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Header />

          <Text style={styles.title}>
            Em qual ambiente
          </Text>
          <Text style={styles.subtitle}>
            Voce quer colocar sua planta?
          </Text>
      </View>
      <EnviromentButton title='Cozinha'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    
  },
  title: {
    fontSize:17,
    color: colors.heading,
    lineHeight: 20,
    marginTop:15,
    fontFamily: fonts.heading
  },
  subtitle:{
    fontFamily:fonts.text,
    fontSize: 17,
    lineHeight:30,
    color: colors.heading,

  },
  Header: {
    padding: 30
  }

});