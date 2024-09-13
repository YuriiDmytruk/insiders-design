import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {text} from '../../styles';

import ButtonOrange from '../../components/ButtonOrange';

import ArrowBack from '../../assets/arrow-back.svg';
import Send from '../../assets/support/send.svg';
import Mic from '../../assets/support/mic.svg';

const Support: React.FC = () => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow_container}>
        <ArrowBack width={24} height={24} />
      </TouchableOpacity>
      <View style={styles.title_container}>
        <Text style={[text.popins_700, text.size_24_32, text.textMainColor]}>
          Contact support
        </Text>
      </View>

      <View style={styles.support_container}>
        <View style={styles.text_container}>
          <Text style={[text.popins_400, text.size_12_18, text.textMainColor]}>
            Our email support is open 24/7.
          </Text>
          <Text style={[text.popins_400, text.size_12_18, text.textMainColor]}>
            If you have any issues with our app, please let us know here or if
            you have any recommendations to improve our app, we’d love to hear
            from you.
          </Text>
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={[
              styles.input,
              text.popins_600,
              text.size_12_16,
              text.textMainColor,
            ]}
            value={input}
            onChangeText={setInput}
            multiline={true}
            placeholder="Type your concerns here"
            textAlignVertical="top"
          />

          <View style={styles.mic}>
            <Mic />
          </View>
        </View>

        <View style={styles.button_container}>
          <ButtonOrange
            title="Send"
            Image={Send}
            marginTop={42}
            paddingVertical={14}
            paddingHorizontal={0}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title_container: {
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  arrow_container: {
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  support_container: {
    paddingHorizontal: 20,
    height: '100%',
    borderTopWidth: 1,
    backgroundColor: '#F8F8F8',
    borderColor: '#E0E0E0',
  },
  text_container: {
    marginTop: 16,
    gap: 16,
  },
  button_container: {
    width: '100%',
  },
  input_container:{
    marginTop: 22,
  },
  input: {
    height: 437,
    borderRadius: 12,
    borderWidth: 1,
    padding: 20,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  mic: {
    padding: 10,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    right: 16,
    top: 16,
  },
});
export default Support;
