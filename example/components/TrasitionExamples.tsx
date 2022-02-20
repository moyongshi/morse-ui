import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native';

import { Button, Card, Fade, Slide } from 'morse-ui';

const images = [
  'https://images3.c-ctrip.com/ztrip/train_xie/2022-01/img_fx_lx1.png',
  'https://images3.c-ctrip.com/ztrip/train_xie/2022-01/img_fx_lx2.png'
]

function TrasitionExamples() {

  const [visible, setVisible] = useState(false)

  return <View style={styles.root}>
    <Slide in={visible} placement={'bottom'}
           style={{left: 0, top: 0, zIndex: -1}}>
      <Fade in={true} entryDuration={300} exitDuration={300}>
        <Image source={{uri: images[0]}} style={styles.image} />
      </Fade>
    </Slide>
    <Card title={'Fade'} style={styles.card} bodyStyle={styles.cardBody}>
      <Button onPress={() => setVisible(!visible)}>滑动显示或隐藏</Button>
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
    position: 'relative'
  },
  image: {
    height: 440,
    width: 300
  }
});

export default TrasitionExamples
