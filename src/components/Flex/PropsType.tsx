import { ReactNode } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

export interface FlexPropsType {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  children?: ReactNode;
  disabled?: boolean;
}

export interface FlexItemPropsType {
  disabled?: boolean;
  children?: ReactNode;
}

/**
 * 常规的点击事件定义
 */
export type TouchableType = Pick<TouchableWithoutFeedbackProps, 'style' | 'onPress' | 'onLongPress' | 'onLayout' | 'accessible'>;
