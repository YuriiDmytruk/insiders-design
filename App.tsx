import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Settings from './pages/Settings/Settings';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Settings/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default App;
