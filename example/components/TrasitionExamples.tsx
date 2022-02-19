import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native';

import { Button, Card, Fade } from 'morse-ui';

const images = [
  'https://images3.c-ctrip.com/ztrip/train_xie/2022-01/img_fx_lx1.png',
  'https://images3.c-ctrip.com/ztrip/train_xie/2022-01/img_fx_lx2.png'
]

function TrasitionExamples() {

  const [visible, setVisible] = useState(false)

  return <View style={styles.root}>
    <Card title={'Fade'} style={styles.card} bodyStyle={styles.cardBody}>
      <Button onPress={() => setVisible(!visible)}>显示或隐藏</Button>
      <Fade in={visible} entryDuration={300} exitDuration={300}>
        <Image source={{uri: images[0]}} style={styles.image} />
      </Fade>
    </Card>
  </View>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
  cardBody: {
    flexDirection: 'column',
  },
  image: {
    height: 440,
    width: 300
  }
});

export default TrasitionExamples
