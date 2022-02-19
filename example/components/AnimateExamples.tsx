import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native';

import { Button, Card } from 'morse-ui';


enum DirectionEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

function AnimateExamples() {
  const translation = useRef(new Animated.ValueXY()).current
  // const translateX = useRef(new Animated.Value(0)).current
  // const translateY = useRef(new Animated.Value(0)).current
  const opacity = useRef(new Animated.Value(1)).current

  /**
   * 自动复原
   * @param {DirectionEnum} type
   * @param {number} distance
   */
  const moveWIthOpacity = (type = DirectionEnum.RIGHT, distance = 100) => {
    Animated.parallel(
      [
        Animated.timing(translation, {
          toValue: {
            x: type === DirectionEnum.LEFT ? -distance : type === DirectionEnum.RIGHT ? distance : 0,
            y: type === DirectionEnum.TOP ? -distance : type === DirectionEnum.BOTTOM ? distance : 0
          }, useNativeDriver: true, duration: 1000
        }),
        Animated.timing(opacity, {toValue: opacity ? 0 : .5, useNativeDriver: true, duration: 1000})
      ]
    ).start(() => {
      // Animated.decay(translation, {
      //   velocity: {x: 100, y: 100},
      //   isInteraction: true,
      //   useNativeDriver: true
      // }).start()
    })
  }


  return <View style={styles.root}>
    <Card title={'简单动画'} description={'移动完后会自动复原'} style={styles.card}>
      <Button onPress={() => moveWIthOpacity(DirectionEnum.TOP)}>上</Button>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.RIGHT)}>右</Button>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.BOTTOM)}>下</Button>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.LEFT)}>左</Button>

    </Card>
    <Card title={'动画色块'} style={styles.card} bodyStyle={{width: 200, height: 200}}>
      <Animated.View style={[styles.animateCard, {
        opacity,
        transform: [
          ...translation.getTranslateTransform(),
          {
            rotate: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }
        ]
      }]} />
    </Card>
  </View>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
    margin: 16,
  },
  button: {
    marginLeft: 8
  },
  animateCard: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',

  }
});

export default AnimateExamples
