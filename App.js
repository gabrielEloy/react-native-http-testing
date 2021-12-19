import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TotalArea from './src/pages/main/totalArea';
import DescriptionArea from './src/pages/main/DescriptionArea';
import {getTotal} from './src/services/balance';
import {useTransactions} from './src/hooks/useTransactions';

const App = () => {
  const {transactions, addTransaction, deleteTransaction} = useTransactions();

  const total = getTotal(transactions);

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
