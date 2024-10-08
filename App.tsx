import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

//import Confirmation from './pages/Confirmation/Confirmation';
//import Support from './pages/Support/Support';
//import Condition from './pages/Conditions/Conditions';
import Privacy from './pages/Privacy/Privacy';
//import Settings from './pages/Settings/Settings';
//import Edit from './pages/Edit/Edit';
//import Account from './pages/Account/Account';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Privacy />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default App;
