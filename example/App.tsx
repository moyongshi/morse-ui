import { defaultTheme, Flex } from 'morse-ui';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import AllButtons from './components/Button/AllButtons';

export const STATUS_HEIGHT = 30;

const { palette } = defaultTheme;

export default function App() {
  return (
    <Flex direction="column" style={styles.root}>
      {/*状态栏*/}
      <StatusBar style="auto" />

      <AllButtons />
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
