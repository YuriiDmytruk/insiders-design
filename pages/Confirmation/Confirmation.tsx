import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

import ButtonOrange from '../../components/ButtonOrange';
import { text } from '../../styles';

const mail = require('../../assets/confirmation/others.png');

const Confirmation: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={mail} />
      </View>

      <View style={styles.text_container}>
        <Text style={[text.popins_700, text.size_24_32, text.textMainColor]}>Message sent!</Text>
        <View style={styles.small_text_container}>
        <Text style={[text.popins_400, text.size_12_16, text.textSecondaryColor, styles.text_center]}>
          Thank you for contacting support. We will get back to you regarding
          the concerns you submitted.
        </Text>
        </View>
      </View>
      <View style={styles.button_container}>
          <ButtonOrange
            title="Go to dashboard"
            marginTop={42}
            paddingVertical={19}
            paddingHorizontal={0}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image_container: {
    marginTop: 64,
    width: 101,
    height: 101,
  },
  text_container: {
    alignItems: 'center',
    marginTop: 32,
    gap: 24,
  },
  small_text_container:{
    maxWidth: 313,
  },
  text_center: {
    textAlign: 'center',
  },
  button_container:{
    marginTop: 'auto',
    marginBottom: 14,
    width: '100%',
  },
});
export default Confirmation;
