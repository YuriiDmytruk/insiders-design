import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import {text} from '../../styles';

import Title from './components/Title';
import Input from './components/Input';
import LogoCamera from '../../components/LogoCamera';
import ButtonOrange from '../../components/ButtonOrange';
import ButtonWhite from '../../components/ButtonWhite';
import DropDown from './components/DropDown';

import ArrowBack from '../../assets/arrow-back.svg';
import Logo from '../../assets/logo.svg';

const Edit: React.FC = () => {

    const [fullName, setFullName] = useState('Richard Greggain');
    const [businessName, setBussinesName] = useState('British Fire & Security');
    const [contactNumber, setContactNumber] = useState('+44 20 7123 4567');
    const [address, setAddress] = useState('97-99 Vicar Ln');


  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.arrow_container}>
        <ArrowBack width={24} height={24} />
      </TouchableOpacity>

      <View style={styles.title_container}>
        <Text style={[text.popins_700, text.size_24_32, text.textMainColor]}>
          Edit account
        </Text>
      </View>

      <View>
        <Title title="Company logo" />
        <View style={styles.logo_container}>
          <LogoCamera
            Logo={Logo}
            logo_height={215}
            logo_width={215}
            right={50}
            bottom={10}
          />
        </View>
      </View>

      <View style={styles.input_list_container}>
        <View style={styles.input_container}>
            <Title title="Your full name"/>
            <Input value={fullName} setValue={setFullName}/>
        </View>
        <View style={styles.input_container}>
            <Title title="Business name"/>
            <Input value={businessName} setValue={setBussinesName}/>
        </View>
        <View style={styles.input_container}>
            <Title title="Business contact number"/>
            <Input value={contactNumber} setValue={setContactNumber}/>
        </View>
        <View style={styles.input_container}>
            <Title title="Business address" />
            <Input value={address} setValue={setAddress}/>
            <DropDown value="Leeds" />
            <DropDown value="West Yorkshire" />
            <DropDown value="LS1 6PJ" />
            <DropDown value="United Kingdom" />
        </View>
      </View>

      <View style={styles.buttons_container}>
      <ButtonWhite
          title="Discard"
          paddingVertical={20}
          paddingHorizontal={55.25}
        />
      <ButtonOrange
          title="Save changes"
          paddingVertical={20}
          paddingHorizontal={32.25}
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
  },
  arrow_container: {
    paddingVertical: 8,
  },
  title_container: {
    paddingVertical: 9,
  },
  logo_container: {
    alignItems: 'center',
    marginTop: 16,
  },
  input_list_container: {
    marginTop: 40,
    gap: 32,
  },
  input_container: {
    gap: 4,
  },
  buttons_container: {
    marginTop: 37,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});

export default Edit;
