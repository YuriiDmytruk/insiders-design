import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import LogoCamera from '../../components/LogoCamera';
import ButtonOrange from '../../components/ButtonOrange';
import BusinesListItem from './components/BusinesListItem';

import {text} from '../../styles';

import ArrowBack from '../../assets/arrow-back.svg';
import Logo from '../../assets/logo.svg';
import Mail from '../../assets/account/mail.svg';
import Edit from '../../assets/account/edit.svg';
import Lock from '../../assets/account/lock.svg';
import Business from '../../assets/account/business-center.svg';
import Phone from '../../assets/account/local-phone.svg';
import Place from '../../assets/account/place.svg';

const Account: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow_container}>
        <ArrowBack width={24} height={24} />
      </TouchableOpacity>
      <View style={styles.logo_container}>
        <LogoCamera
          Logo={Logo}
          logo_height={128}
          logo_width={118}
          right={20}
          bottom={5}
        />
      </View>

      <View style={styles.title_container}>
        <Text style={[text.popins_700, text.size_20_28, text.textMainColor]}>
          Richard Greggain
        </Text>
        <View style={styles.mail_container}>
          <Mail width={16} height={16} />
          <Text style={[text.popins_500, text.size_12_16, text.textMainColor]}>
            richardgreggain@email.com
          </Text>
        </View>

        <ButtonOrange
          title="Edit account"
          Image={Edit}
          paddingVertical={10}
          paddingHorizontal={20}
          marginTop={24}
        />
      </View>

      <View style={styles.devider}></View>

      <View style={styles.security_container}>
        <Text
          style={[text.popins_500, text.size_12_16, text.textSecondaryColor]}>
          SECURITY
        </Text>
        <View style={styles.reset_container}>
          <Lock width={20} height={20} />
          <Text style={[text.popins_600, text.size_12_16, text.textRedColor]}>
            Reset password
          </Text>
        </View>
      </View>

      <View style={styles.business_container}>
        <Text
          style={[text.popins_500, text.size_12_16, text.textSecondaryColor]}>
          BUSINESS DETAILS
        </Text>
        <View style={styles.business_container_list}>
          <BusinesListItem
            Icon={Business}
            title="Business name"
            value="British Fire & Security"
          />
          <BusinesListItem
            Icon={Phone}
            title="Contact details"
            value="+44 20 7123 4567"
          />
          <BusinesListItem
            Icon={Place}
            title="Business address"
            value="97-99 Vicar Ln, Leeds, West Yorkshire
LS1 6PJ, UK"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
  },
  arrow_container: {
    paddingVertical: 8,
  },
  logo_container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title_container: {
    alignItems: 'center',
  },
  mail_container: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 8,
  },
  devider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: 32,
  },
  security_container: {
    gap: 12,
  },
  reset_container: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  business_container: {
    marginTop: 36,
    gap: 12,
  },
  business_container_list: {
    gap: 16,
  },
});

export default Account;
