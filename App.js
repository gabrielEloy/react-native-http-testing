import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TotalArea from './src/pages/main/totalArea';

const App = () => {
  return (
    <View style={styles.contentArea}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.totalContainer}>
          <TotalArea />
        </View>
        <View style={styles.bodyContainer} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  contentArea: {flex: 1, backgroundColor: '#2D2D38'},
  totalContainer: {
    flex: 3,
  },
  bodyContainer: {
    flex: 7,
    borderColor: 'blue',
    borderWidth: 1,
  },
});

export default App;
