import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {text, colors} from '../../styles';
import SystemListItem from '../../components/SystemListItem';

import Logo from '../../assets/logo.svg';

import Contact from '../../assets/setings/contact.svg';
import Terms from '../../assets/setings/terms.svg';
import Privacy from '../../assets/setings/privacy.svg';
import LogOut from '../../assets/setings/log-out.svg';

import Arrow from '../../assets/setings/keyboard-arrow-right.svg';

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={[text.popins_700, text.size_24_32, text.textMainColor]}>
          Settings
        </Text>
      </View>

      <View style={styles.account_container}>
        <Text
          style={[text.popins_500, text.size_12_16, text.textSecondaryColor]}>
          ACCOUNT
        </Text>
        <View style={[styles.account, colors.bgLightOrange]}>
          <Logo width="40px" height="40px"/>
          <Text style={[text.popins_600, text.size_14_20, text.textMainColor]}>Richard Greggain</Text>
          <Arrow style={styles.account_arrow}/>
        </View>
      </View>

      <View style={styles.system_container}>
        <Text style={[text.popins_500, text.size_12_16, text.textSecondaryColor, styles.system_title]}>SYSTEM</Text>
        <SystemListItem title="Contact support" image={Contact} />
        <SystemListItem title="Terms of use" image={Terms} />
        <SystemListItem title="Privacy Policy" image={Privacy} />
        <SystemListItem title="Log out" image={LogOut} />
      </View>
    </View>
  );
};
/*
<SystemListItem title="Contact support" image={contact} />
        <SystemListItem title="Terms of use" image={terms} />
        <SystemListItem title="Privacy Policy" image={privacy} />
        <SystemListItem title="Log out" image={log_out} />
*/

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  title_container: {
    paddingVertical: 9,
  },
  account_container: {
    width: '100%',
    marginTop: 22,
  },
  account: {
    gap: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
  },
  account_arrow:{
    marginLeft: 'auto',
  },
  system_container: {
    paddingTop: 40,
    gap: 8,
  },
  system_title: {
    paddingVertical: 4,
  },
});

export default Settings;
