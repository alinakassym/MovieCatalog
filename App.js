import React from 'react';
import Home from './src/screens/Home'
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Home />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default App;
