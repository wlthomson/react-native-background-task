import React from 'react';
import { Image, StyleSheet } from 'react-native';

const App = () => {
  const uri = "https://cdn2.thecatapi.com/images/e11.jpg";
  return <Image style={styles.image} source={{ uri }}/>
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 25,
    bottom: 25,
    left: 25,
    right: 25
  }
});

export default App;
