import React from 'react';
import {View} from 'react-native';
import TransactionsList from '../../../components/TransactionsList';

const DescriptionArea = ({transactions}) => {
  return (
    <View>
      <TransactionsList transactions={transactions} />
    </View>
  );
};

export default DescriptionArea;
