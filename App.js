import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './components/login';
import CustomInput from './components/customInput';
import CustomButton from './components/customButton';

const App = () =>{
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFC',
  },
});
export default App;