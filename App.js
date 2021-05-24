import React from 'react';
import { useSelector } from 'react-redux';
import { Image, StyleSheet, NativeModules } from 'react-native';

const { AlarmManagerModule } = NativeModules;

const App = () => {
  React.useEffect(() => {
    AlarmManagerModule.setRepeating('android.intent.action.taskservicereceiver', 60000);
  }, [])

  const uri = useSelector(store => store.url);
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
