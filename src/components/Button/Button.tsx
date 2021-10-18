import React, { ComponentProps } from 'react';
import { GestureResponderEvent, Pressable, StyleProp, View, ViewStyle } from 'react-native';

type OwnProps = ComponentProps<typeof Pressable> & {
  /**
   * 不同的按钮样式
   * - `outlined` - 边框型
   * - `contained` - 填充型
   * - `none` - 无边框
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 按钮失效状态
   */
  disabled?: boolean;
  /**
   * 是否loading状态
   */
  loading?: boolean;
  /**
   * 设置危险按钮
   */
  danger?: boolean;
  /**
   * 幽灵属性，使按钮背景透明
   * 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
   */
  ghost?: boolean;
  /**
   * loading时显示的文本
   */
  loadingText?: boolean;
  /**
   * 尺寸
   * - `small` - 小号尺寸
   * - `middle` - 常规尺寸
   * - `large` - 大号尺寸
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * 按钮形状
   * - default - 默认矩形
   * - circle - 圆形
   * - round - 圆角
   */
  shape?: 'default' | 'circle' | 'round';
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
   * 渲染
   */
  children?: React.ReactNode;
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
