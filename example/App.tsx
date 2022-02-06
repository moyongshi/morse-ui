import React from 'react';
import { LogBox, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Flex, useTheme, withTheme } from 'morse-ui';

import DividerExample from './components/DividerExample';

export const STATUS_HEIGHT = 30;

LogBox.ignoreAllLogs();

function App() {
  const { palette } = useTheme();
  return (
    <Flex direction='column' align={'stretch'} style={[styles.root, { backgroundColor: palette.background.paper }]}>
      {/*状态栏*/}
      <StatusBar style='auto' />
      {/*<AllCard />*/}
      <DividerExample />
    </Flex>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: STATUS_HEIGHT,
  },
});

export default withTheme(App);
