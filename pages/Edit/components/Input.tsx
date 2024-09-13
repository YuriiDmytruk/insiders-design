import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { text } from '../../../styles';

type Props = {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
};

const Input: React.FC<Props> = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, text.popins_600, text.size_12_16, text.textMainColor]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 48,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
});

export default Input;
