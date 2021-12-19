import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  const buttonStyle = [styles.container, props.buttonStyle];
  const newprops = {...props};

  if (typeof props.children === 'string') {
    newprops.children = <Text style={styles.text}>{props.children}</Text>;
  }

  return <TouchableOpacity style={buttonStyle} {...newprops} />;
};

export default Button;
