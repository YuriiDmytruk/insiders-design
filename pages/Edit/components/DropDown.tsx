import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { text } from '../../../styles';

import RightIcon from '../../../assets/edit/right-icon.svg';

type Props = {
  value: string;
};

const DropDown: React.FC<Props> = ({ value }) => {
  return (
    <View style={styles.container}>
        <Text style={[text.popins_600, text.size_12_16, text.textMainColor]}>
            {value}
        </Text>
        <RightIcon width={16} height={16}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default DropDown;
