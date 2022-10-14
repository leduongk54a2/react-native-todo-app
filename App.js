/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Button, Linking, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <StatusBar translucent backgroundColor={'red'} />
      <Text style={styles.title}>hello react native</Text>
      <Button
        title="show youtube"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=ANdSdIlgsEw');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});

export default App;
