import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
1
export default function App() {
  return (
    <View style={styles.container}>
     <Tittle/>
     <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
