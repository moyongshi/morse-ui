import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Flex, Button, Modal } from 'morse-ui';

export default function App() {
  return (
    <Flex direction="column" style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button>
        <Text>点击</Text>
      </Button>
      <Modal visible>
        <Text>点击</Text>
      </Modal>
      <StatusBar style="auto" />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
