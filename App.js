import React from 'react';
import Home from './screens/Home'
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
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default App;
