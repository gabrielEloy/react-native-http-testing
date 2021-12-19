import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {numberToCurrencyString} from '../../helpers/currency';
import Button from '../Button';

const Transaction = ({isDebit, value, style: propStyle, deleteTransaction}) => {
  const formattedValue = numberToCurrencyString(value);

  const [gradientColors, valueStyle, descriptionString] = isDebit
    ? [['#FFB4B5', '#FF454A'], styles.debit, 'Debit']
    : [['#BEFFA0', '#24C832'], styles.credit, 'Credit'];

  return (
    <View style={[styles.container, propStyle]}>
      <View style={styles.indicatorContainer}>
        <LinearGradient
          colors={gradientColors}
          start={{x: 0.8, y: 0}}
          end={{x: 0.2, y: 0.7}}
          style={styles.gradientStyle}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text adjustsFontSizeToFit style={valueStyle}>
          {descriptionString} value: {formattedValue}
        </Text>
      </View>
      <View style={styles.deleteContainer}>
        <Button onPress={deleteTransaction} style={styles.deleteButton}>
          X
        </Button>
      </View>
    </View>
  );
};

export default Transaction;
