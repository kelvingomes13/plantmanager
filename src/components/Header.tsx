import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import colors from "../styles/colors";
import userImg from "../assets/perfil.png";
import fonts from "../styles/fonts";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greating}>Olá,</Text>
        <Text style={styles.Username}>Kelvin</Text>

      </View>
      <Image source={userImg}  style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
   
  },
  image: {
    width: 80,
    height: 80,
    borderRadius:40,
    
    
  },

  greating: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  Username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading
  }



})