/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

import type { ISupportedTransitions, ITransitionConfig, ITransitionProps } from './types';

const transformStylesMap = {
  translateY: true,
  translateX: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
};

const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: '0deg',
};

/**
 * 将输入插值映射到输出端
 * @param animateValue
 * @returns {(initial: ISupportedTransitions, to: ISupportedTransitions) => any}
 */
const getAnimatedStyles = (animateValue: any) => (initial: ISupportedTransitions, to: ISupportedTransitions) => {
  const styles: any = {
    transform: [],
  };
  for (let key in initial) {
    if (key === 'transition') {
      continue;
    }

    if (key in transformStylesMap) {
      styles.transform?.push({
        [key]: animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [(initial as any)[key], (to as any)[key]],
        }),
      } as any);
    } else {
      styles[key] = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [(initial as any)[key], (to as any)[key]],
      });
    }
  }

  return styles;
};

const defaultTransitionConfig: ITransitionConfig = {
  type: 'timing',
  useNativeDriver: true,
  duration: 250,
  delay: 0,
};

/**
 * 通用的动画控制组件
 * 使用animateValue，结合插值方法，设置开始到结束动画
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<ITransitionProps> & React.RefAttributes<unknown>>}
 */
export const Transition = forwardRef(
  ({
     children,
     onTransitionComplete,
     visible = false,
     initial,
     animate,
     exit,
     style,
     as,
     ...rest
   }: ITransitionProps, ref: any) => {
    const animateValue = React.useRef(new Animated.Value(0)).current;

    /**
     * 指定组件支持动画功能
     */
    const Component = React.useMemo(() => {
      if (as) {
        return Animated.createAnimatedComponent(as);
      }
      return Animated.View;
    }, [as]);

    /**
     * entering 开始
     * entered  进入
     * exiting  结束
     */
    const [animationState, setAnimationState] = React.useState('');

    const prevVisible = React.useRef(visible);

    React.useEffect(() => {
      if (animationState === 'entering' || animationState === 'exiting') {
        const entryTransition = {
          ...defaultTransitionConfig,
          ...animate?.transition,
        };
        const exitTransition = {
          ...defaultTransitionConfig,
          ...exit?.transition,
        };

        const startAnimation = animationState === 'entering' ? 1 : 0;

        const transition = startAnimation ? entryTransition : exitTransition;

        Animated.sequence([
          // @ts-ignore - delay is present in defaultTransitionConfig
          Animated.delay(transition.delay),
          Animated[transition.type ?? 'timing'](animateValue, {
            toValue: startAnimation,
            useNativeDriver: true,
            ...transition,
          }),
        ]).start(() => {
          if (animationState === 'entering') {
            setAnimationState('entered');
          } else if (animationState === 'exiting') {
            setAnimationState('exited');
          }
        });
      }

      if (animationState === 'exited') {
        onTransitionComplete?.('exited');
      } else if (animationState === 'entered') {
        onTransitionComplete?.('entered');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animationState, onTransitionComplete]);

    React.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        setAnimationState('exiting');
      }

      if (visible) {
        setAnimationState('entering');
      }
      prevVisible.current = visible;
    }, [visible]);

    const initialState = animationState === 'exited' && exit ?
      {...defaultStyles, ...exit} : {...defaultStyles, ...initial};

    const animateState = {...defaultStyles, ...animate};

    /**
     * 将animate中的每个动画值进行插值，对应开始和结束
     */
    const styles = React.useMemo(() => {
      return [getAnimatedStyles(animateValue)(initialState as ISupportedTransitions, animateState as ISupportedTransitions), style];
    }, [animateValue, initial, animate, style]);

    return (
      <Component pointerEvents={!visible ? 'none' : 'box-none'} style={[styles]} ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);
