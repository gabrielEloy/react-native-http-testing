import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const TotalArea = ({total = 22000}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
    return (
    <View style={styles.container}>
      <Text style={styles.totalDesc}>Total Value</Text>
      <Text style={styles.total}>{formatter.format(total)}</Text>
      <View style={styles.buttonsContainer}>
        <Button>
            Add $100
        </Button>
        <Button>
            Remove $100
        </Button>
      </View>
    </View>
  );
};

export default TotalArea;
