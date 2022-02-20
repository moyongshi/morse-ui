import React, { forwardRef, memo } from 'react';

import Flex from '../Flex';
import { Transition } from './Trasitions';
import type { ISlideProps } from './types';

const holderStyle: {
  [key in 'top' | 'right' | 'bottom' | 'left']: {top?: number, right?: number, bottom?: number, left?: number}
} = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
  },
};

/**
 * 外部包裹Transition组件，使用绝对定位实现移动动画
 * 内部包裹View，处理动画出现之前的透明度问题
 * 内部Flex组件获取内容高度，执行
 */
export const Slide = ({children, ...props}: ISlideProps, ref: any) => {
  const {in: visible, placement = 'top', duration} = props;

  const [containerOpacity, setContainerOpacity] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const provideSize = (layoutSize: any) => {
    if (placement === 'right' || placement === 'left')
      setSize(layoutSize.width);
    else setSize(layoutSize.height);
    setContainerOpacity(1);
  };

  const transition = {duration};

  const animationStyle: any = {
    top: {
      initial: {
        translateY: -size,
      },
      animate: {
        translateY: 0,
        transition,
      },
    },
    bottom: {
      initial: {
        translateY: size,
      },
      animate: {
        translateY: 0,
        transition,
      },
      exit: {
        translateY: size,
        transition,
      },
    },
    left: {
      initial: {
        translateX: -size,
      },
      animate: {
        translateX: 0,
        transition,
      },
    },
    right: {
      initial: {
        translateX: size,
      },
      animate: {
        translateX: 0,
        transition,
      },
    },
  };

  return <Transition
    visible={visible}
    {...animationStyle[placement]}
    style={[
      {position: 'absolute'},
      holderStyle[placement],
      {height: '100%'},
    ]}
  >
    <Flex
      style={{opacity: containerOpacity}}
      {...props}
      ref={ref}
      onLayout={(e) => provideSize(e.nativeEvent.layout)}
    >
      {children}
    </Flex>
  </Transition>
};

export default memo(forwardRef(Slide));
