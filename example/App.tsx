import { StatusBar } from 'expo-status-bar';
import { Button, defaultTheme, Flex, Popup } from 'morse-ui';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

export const STATUS_HEIGHT = 30;

const { palette } = defaultTheme;

export default function App() {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  return (
    <Flex direction='column' style={styles.root}>
      {/*状态栏*/}
      <StatusBar style='auto' />
      {/*<AllButtons />*/}
      <Button style={{ marginTop: 30 }} onPress={toggle}>
        打开
      </Button>
      <Popup
        visible={visible}
        direction='bottom'
        onMaskClick={() => setVisible(false)}
        afterOpen={() => console.log('打开')}
        afterClose={() => console.log('关闭')}
        destroy={false}
      >
        <Flex style={{ height: 100, width: 200, paddingTop: 20 }}>
          <Button>关闭</Button>
        </Flex>
      </Popup>
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
