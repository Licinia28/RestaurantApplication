import { Text, StyleSheet, View, SafeAreaView,TextInput } from 'react-native'
import {Button } from 'react-native'
//import { useState } from 'react';



const Login =() => {
  //const[titleText, setTitleText] = useState("Welcome Back");

  return(
    <View>
     
      <View>
        <Text style={styles.titleText}>
            Welcome Back
          </Text>
      </View>
      
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
      </View>
      
      {/* <View>
        <Button>
          style={styles.button}
          onPress={onPressLogin}
          title="login"
        </Button>
      </View> */}
      

      

    </View>
  )

}

const styles = StyleSheet.create({
  input:{
    height:35,
    margin:12,
    borderWidth:1,
    width:200,
    padding:3,
  },

});

export default Login;