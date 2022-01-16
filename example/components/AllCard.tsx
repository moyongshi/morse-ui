import React, { useState, VoidFunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { CardSizeType } from 'morse-ui';
import { Button, Card, defaultTheme, Flex, VanIconAdd } from 'morse-ui';

const {
  spacing,
  palette: { gray },
} = defaultTheme;
type OwnProps = {};

const AllCard: VoidFunctionComponent<OwnProps> = () => {
  const [size, setSize] = useState<CardSizeType>('large');

  const onPressButton = (_size) => () => setSize(_size);

  return (
    <View>
      <Card style={styles.card} title={'一段标题'} size={size} />
      <Card
        style={styles.card}
        title={'标题'}
        size={size}
        avatar={(size) => (
          <Button fill={'none'} style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
            <VanIconAdd size={size} />
          </Button>
        )}
        extra={() => <Button>确认</Button>}
      />
      <Card
        style={styles.card}
        title={'标题'}
        size={size}
        avatar={(size) => <VanIconAdd size={size} />}
        extra={(size) => <VanIconAdd size={size} />}
      />
      <Card style={styles.card} title={'标题'} size={size} extra={(size) => <VanIconAdd size={size} />} />
      <Card.Meta style={[styles.card, styles.cardMeta]} title={'使用Meta'} size={size} extra={(size) => <VanIconAdd size={size} />} />
      <Card style={styles.card} title={'标题'} size={size}>
        <Flex direction={'column'}>
          <Text>包含内容</Text>
          <Text>包含内容</Text>
          <Text>包含内容</Text>
        </Flex>
      </Card>
      <Flex justify={'between'} style={{ marginTop: 20 }}>
        <Button onPress={onPressButton('small')}>small</Button>
        <Button onPress={onPressButton('default')}>default</Button>
        <Button onPress={onPressButton('large')}>large</Button>
      </Flex>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 359,
    marginTop: 20,
  },
  cardMeta: {
    borderWidth: 1,
    borderColor: gray['gray-1'],
    paddingVertical: spacing * 2,
    paddingHorizontal: spacing * 3,
  },
});
export default AllCard;
