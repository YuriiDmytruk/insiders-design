import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { text } from '../../../styles';

type Props = {
  title: string;
  value: string;
};

const TextPart: React.FC<Props> = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bullet}>•</Text>
      <Text>
        <Text style={[text.popins_700, text.size_12_20, text.textSecondaryColor]}>{title}: </Text>
        <Text style={[text.popins_400, text.size_12_20, text.textSecondaryColor]}>{value}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bullet: {
    color: '#4F4F4F',
    fontSize: 20,
    marginRight: 6,
    lineHeight: 20,
  },
});

export default TextPart;
