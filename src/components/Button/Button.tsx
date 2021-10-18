import React, { ComponentProps } from 'react';
import { GestureResponderEvent, Pressable, StyleProp, View, ViewStyle } from 'react-native';

type OwnProps = ComponentProps<typeof Pressable> & {
  /**
   * 不同的按钮样式
   * - `outlined` - 边框型
   * - `contained` - 填充型
   * - `none` - 无边框
   */
  mode?: 'outlined' | 'contained' | 'none';
  /**
   * 是否可用
   */
  disabled?: boolean;
  /**
   * 是否loading状态
   */
  loading?: boolean;
  /**
   * loading时显示的文本
   */
  loadingText?: boolean;
  /**
   * 尺寸
   * - `mini` - 极小尺寸
   * - `small` - 小号尺寸
   * - `middle` - 常规尺寸
   * - `large` - 大号尺寸
   */
  size?: 'mini' | 'small' | 'middle' | 'large';
  /**
   * 点击
   * @param e
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * 长按，默认点击500ms时触发
   * @param e
   */
  onLongPress?: (e: GestureResponderEvent) => void;
  /**
   * 渲染的孩子
   */
  children: React.ReactNode;
  /**
   * 采用view的样式
   */
  style?: StyleProp<ViewStyle>;
};

export type ButtonProps = OwnProps;

/**
 * 按钮
 * 1、点击功能
 * 2、三种模式的样式
 */
const Button = ({
  disabled: disabledProp,
  loading: loadingProp,
  onPress,
  onLongPress,
  style,
  children,
  ...rest
}: OwnProps) => {
  const handleLongPress = (e: GestureResponderEvent) => {
    onLongPress?.(e);
  };

  const disabled = disabledProp || loadingProp;

  /**
   * 处理UI层样式
   */
  const surfaceStyle = disabled ? {} : style;

  return (
    <Surface style={surfaceStyle} {...rest}>
      <Pressable onPress={onPress} onLongPress={handleLongPress}>
        {children}
      </Pressable>
    </Surface>
  );
};

export type SurfaceProps = {
  /**
   * 渲染的孩子
   */
  children: React.ReactNode;
  /**
   * 采用view的样式
   */
  style?: StyleProp<ViewStyle>;
};

/**
 * 效果UI组件
 * @constructor
 */
const Surface = ({ style, children }: SurfaceProps) => {
  return <View style={style}>{children}</View>;
};

export default Button;
