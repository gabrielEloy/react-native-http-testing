import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import TotalArea from './totalArea';
import DescriptionArea from './DescriptionArea';
import {getTotal} from '../../services/balance';
import {useTransactions} from '../../hooks/useTransactions';
import styles from './style';

const Home = () => {
  const {transactions, addTransaction, deleteTransaction, isLoading} =
    useTransactions();

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
          {isLoading ? (
            <View style={styles.contentArea}>
              <Text>loading</Text>
            </View>
          ) : (
            <DescriptionArea
              deleteTransaction={deleteTransaction}
              transactions={transactions}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
