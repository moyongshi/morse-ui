import React from 'react';
import { LogBox, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Flex } from 'morse-ui';

import AllCard from './components/AllCard';
import DividerExample from './components/DividerExample';

export const STATUS_HEIGHT = 30;

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Flex direction='column' align={'stretch'} style={styles.root}>
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
    backgroundColor: 'rgb(245, 247, 250)',
    marginTop: STATUS_HEIGHT,
  },
});
