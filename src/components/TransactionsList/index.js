import React from 'react';
import {FlatList} from 'react-native';
import Transaction from '../Transaction';
import styles from './styles';

const TransactionsList = ({transactions, deleteTransaction}) => {
  const renderItem = ({item, index}) => {
    const isLastItem = index === transactions.length - 1;
    return (
      <Transaction
        {...item}
        isDebit={item.type === 'debit'}
        style={isLastItem ? {} : styles.rowContainer}
        deleteTransaction={() => deleteTransaction(item.id)}
      />
    );
  };

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(_, idx) => idx}
    />
  );
};

export default TransactionsList;
