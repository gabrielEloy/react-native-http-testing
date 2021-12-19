import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TotalArea from './src/pages/main/totalArea';
import DescriptionArea from './src/pages/main/DescriptionArea';
import useSWR, {useSWRConfig} from 'swr';
import axios from 'axios';
import {getTotal} from './src/services/balance';
import {fetcher} from './src/services/network';

const App = () => {
  const urlPath = `${process.env.API_BASE_URL}/transactions`;
  const {data: transactions} = useSWR(urlPath, fetcher);
  const {mutate} = useSWRConfig();
  
  const total = getTotal(transactions);
  

  const addTransaction = async (value, isDebit) => {
    const type = isDebit ? 'debit' : 'credit';
    const transaction = {
      value,
      type,
    };
    await axios.post(urlPath, transaction);
    mutate(urlPath);
    return;
  };

  const deleteTransaction = async id => {
    await axios.delete(`${urlPath}/${id}`);
    mutate(urlPath);
  };

  return (
    <View style={styles.contentArea}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.totalContainer}>
          <TotalArea
            addDebit={() => addTransaction(100, true)}
            addCredit={() => addTransaction(100, false)}
            total={total}
          />
        </View>
        <View style={styles.bodyContainer}>
          <DescriptionArea
            deleteTransaction={deleteTransaction}
            transactions={transactions}
          />
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
