import React from "react";
import{ 
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { ButtonProps } from "react-native/Libraries/Components/Button";

interface ButotnProps extends TouchableOpacityProps{
  title: string;
}

export function Button({ title, ...rest} : ButtonProps){
    return (
      <TouchableOpacity 
      style={styles.container}
      { ...rest}
      >
      <Text style={styles.text}>
          { title }
        </Text>
      </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent:"center",
    alignItems:'center',
    borderRadius: 16,
    width:'100%',
    height:56,
    marginTop:20
    
  },

  text:{
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
});