import React from 'react';
import { LogBox, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { defaultTheme, Flex } from 'morse-ui';

import AllCard from './components/AllCard';

export const STATUS_HEIGHT = 30;

const { palette } = defaultTheme;

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Flex direction='column' style={styles.root}>
      {/*状态栏*/}
      <StatusBar style='auto' />
      <AllCard />
    </Flex>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: STATUS_HEIGHT,
    backgroundColor: palette.background.default,
  },
});
