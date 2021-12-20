import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import {numberToCurrencyString} from '../../../services/currency';

const TotalArea = ({total = 22000, addCredit, addDebit}) => {
  const formattedTotal = numberToCurrencyString(total);
  return (
    <View style={styles.container}>
      <Text style={styles.totalDesc}>Total Value</Text>
      <Text style={styles.total}>{formattedTotal}</Text>
      <View style={styles.buttonsContainer}>
        <Button onPress={addCredit}>Add $100</Button>
        <Button onPress={addDebit}>Remove $100</Button>
      </View>
    </View>
  );
};

export default TotalArea;
