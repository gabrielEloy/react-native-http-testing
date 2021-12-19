import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import {numberToCurrencyString} from '../../../helpers/currency';

const TotalArea = ({total = 22000}) => {
  const formattedTotal = numberToCurrencyString(total);
  return (
    <View style={styles.container}>
      <Text style={styles.totalDesc}>Total Value</Text>
      <Text style={styles.total}>{formattedTotal}</Text>
      <View style={styles.buttonsContainer}>
        <Button>Add $100</Button>
        <Button>Remove $100</Button>
      </View>
    </View>
  );
};

export default TotalArea;
