import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native';

import { Button, Card } from 'morse-ui';

enum DirectionEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

function AnimateExamples() {
  const translation = useRef(new Animated.ValueXY()).current
  let translateValue = useRef({x: 0, y: 0});
  const opacity = useRef(new Animated.Value(1)).current

  const width_1 = useRef(new Animated.Value(0)).current
  const width_2 = useRef(new Animated.Value(0)).current
  const width_3 = useRef(new Animated.Value(0)).current

  useEffect(() => {
    translation.addListener((value) => translateValue.current = value)
    return () => {
      translation.removeAllListeners()
    }
  }, [translation])

  /**
   * 会自动回归的移动
   * @param {DirectionEnum} type
   * @param {number} distance
   */
  const moveWIthOpacity = (type = DirectionEnum.RIGHT, distance = 10) => {
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
      // 回到原点
      Animated.spring(translation, {
        toValue: {x: 0, y: 0},
        delay: 100, speed: 4,
        useNativeDriver: true
      }).start()

      // 直接出界
      // Animated.decay(translation, {
      //   velocity: {x: 3, y: -10},
      //   deceleration: 0.98,
      //   useNativeDriver: true
      // }).start()
    })
  }

  const startAni = () => {
    // 设定初始速度和衰减系数，会自动计算toValue
    Animated.decay(width_1, {
      deceleration: 0.79,
      velocity: 100,
      useNativeDriver: false,
    }).start((finished) => {
      console.info('动画是否完成：', finished)
    });
    // spring模型，需要设置toValue，有不同的动画效果
    Animated.spring(width_2, {
      toValue: 200,
      friction: 2,
      useNativeDriver: false,
    }).start();

    Animated.timing(width_3, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  const resetAni = () => {
    // width_1.resetAnimation()
  }

  return <View style={styles.root}>
    <Card title={'简单动画'} description={'移动完后会自动复原'}
          style={styles.card}
          bodyStyle={styles.cardBody}>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.TOP)}>上</Button>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.RIGHT)}>右</Button>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.BOTTOM)}>下</Button>
      <Button style={styles.button} onPress={() => moveWIthOpacity(DirectionEnum.LEFT)}>左</Button>
      <Button style={styles.button} onPress={() => startAni()}>动画比较</Button>
      <Button style={styles.button} onPress={() => resetAni()}>复原</Button>
    </Card>
    <Card title={'动画色块'} style={styles.card} bodyStyle={{width: 200, height: 200}}>
      <Animated.View style={[styles.animateCard, {
        opacity: translation.x.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0]
        }),
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

    <View style={styles.example}>
      <Text>decay</Text>
      <Animated.View style={[{width: width_1}, styles.ani]} />
      <Text>spring</Text>
      <Animated.View style={[{width: width_2}, styles.ani]} />
      <Text>timing</Text>
      <Animated.View style={[{width: width_3}, styles.ani]} />
    </View>
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
  cardBody: {
    paddingLeft: 0,
    alignItems: 'flex-start'
  },
  button: {
    marginBottom: 8,
    marginLeft: 8
  },
  animateCard: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  example: {
    height: 200,
    marginHorizontal: 16
  },
  ani: {
    marginTop: 10,
    height: 100,
    backgroundColor: 'yellow',
  }
});

export default AnimateExamples
