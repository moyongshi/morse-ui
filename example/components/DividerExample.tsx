import React, { VoidFunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, Divider } from 'morse-ui';

import { STATUS_HEIGHT } from '../App';

type OwnProps = {};

const DividerExample: VoidFunctionComponent<OwnProps> = () => {
  return (
    <View style={styles.root}>
      <Card title={'默认分割线'} style={styles.card} bodyStyle={styles.body}>
        <Divider />
      </Card>
      <Card title={'带内容的分割线'} style={styles.card} bodyStyle={styles.body}>
        <Divider>分割线</Divider>
        <Divider contentPosition={'left'}>分割线</Divider>
        <Divider contentPosition={'right'}>分割线</Divider>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  card: {
    margin: 16,
    // width: 300,
  },
  body: {
    flexDirection: 'column',
  },
});
export default DividerExample;
