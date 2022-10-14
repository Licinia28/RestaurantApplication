/*
import React from 'react';
import { Text,StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} 
      style={[styles.container, styles['container_${type}'],
      bgColor ? {backgroundColor:bgColor} : {}
       ]}>
      <Text style={[styles.text, styles['text_${type}'],
        fgColor ? {color:fgColor} :{}
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3B71F3',
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    container_PRIAMRY:{
      backgroundColor:'#3B71F3',w
    },
    container_TERTIARY:{

    },
    text:{
      fontWeight:'bold',
      color:'white',
    },

    text_TERTIARY:{
      color:'grey',
    },

});
export default CustomButton;
*/