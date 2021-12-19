import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TotalArea from './src/pages/main/totalArea';
import DescriptionArea from './src/pages/main/DescriptionArea';

const getTransactions = () => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve([
          {
            value: 100,
            type: 'debit',
          },
          {
            value: 100,
            type: 'credit',
          },
          {
            value: 100,
            type: 'credit',
          },
        ]),
      200,
    ),
  );
};

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log({['process.env.API_BASE_URL']: process.env.API_BASE_URL})

  useEffect(() => {
    setIsLoading(true);
    getTransactions().then(transactions => {
      setTransactions(transactions);
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.contentArea}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.totalContainer}>
          <TotalArea />
        </View>
        <View style={styles.bodyContainer}>
          <DescriptionArea transactions={transactions} />
        </View>
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
    paddingHorizontal: 20,
  },
});

export default App;
