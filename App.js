import React from 'react';
import Home from './src/screens/Home'
import {StyleSheet, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.sectionContainer}>
      <Home />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
});


export default App;
