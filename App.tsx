import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigation} from './src/navigations/index';
type Props = {};

const App = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'default'} />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
