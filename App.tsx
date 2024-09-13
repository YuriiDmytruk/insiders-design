import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

//import Settings from './pages/Settings/Settings';
import Edit from './pages/Edit/Edit';
//import Account from './pages/Account/Account';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Edit />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default App;
