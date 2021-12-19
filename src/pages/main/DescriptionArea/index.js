import React from 'react';
import {View} from 'react-native';
import TransactionsList from '../../../components/TransactionsList';

const DescriptionArea = ({transactions, deleteTransaction}) => {
  return (
    <View>
      <TransactionsList
        deleteTransaction={deleteTransaction}
        transactions={transactions}
      />
    </View>
  );
};

export default DescriptionArea;
