import React, { ComponentProps, isValidElement, ReactNode, useState } from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableHighlight, TouchableOpacity, ViewStyle } from 'react-native';

import defaultTheme from '../../core/Theme';
import renderNode from '../../utils/renderNode';
import IconFont from '../Icon';

const { spacing, palette } = defaultTheme;

type OwnProps = ComponentProps<typeof TouchableOpacity> & {
  /**
   * 填充模式
   * - solid -  填充主色调  主按钮
   * - outlined  -  边框主色调   虚线按钮
   * - text    -  纯文字          文本按钮
   */
  fill?: ButtonFillType;
  /**
   * 颜色
   */
  color?: ButtonColorType;
  /**
   * 按钮尺寸
   */
  size?: ButtonSizeType;
  /**
   * 按钮失效状态
   */
  disabled?: boolean;
  /**
   * 是否loading状态
   */
  loading?: boolean;
  /**
   * loading时显示的文本
   */
  loadingText?: string;
  /**
   * 按钮文字左边的图标
   */
  leftIcon?: ReactNode;
  /**
   * 按钮文字右边的图标
   */
  rightIcon?: ReactNode;
  /**
   * 按钮开头的图标
   * 会被leftIcon覆盖
   */
  startIcon?: ReactNode;
  /**
   * 按钮结尾的图标
   * 会被rightIcon覆盖
   */
  endIcon?: ReactNode;
  /**
   * 采用view的样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * testID
   */
  testID?: string;
};

export type ButtonProps = OwnProps;

/**
 * 按钮填充类型
 */
export type ButtonFillType = 'solid' | 'outlined' | 'none';

/**
 * 色调
 */
export type ButtonColorType = 'primary' | 'success' | 'warning' | 'error';

/**
 * 按钮尺寸
 */
export type ButtonSizeType = 'lg' | 'ld' | 'xs' | 'sm';

/**
 * 按钮
 * 1、点击功能
 * 2、三种模式的样式
 */
const Button = ({
  fill = 'solid',
  color: colorProp = 'primary',
  disabled: disabledProp,
  loading: loadingProp,
  leftIcon: leftIconProp,
  startIcon: startIconProp,
  rightIcon: rightIconProp,
  endIcon: endIconProp,
  style,
  loadingText,
  children,
  onPressIn,
  onPressOut,
  ...pressRest
}: OwnProps) => {
  const [isActive, setIsActive] = useState(false);
  const disabled = disabledProp || loadingProp;
  const startIcon = leftIconProp || startIconProp;
  const endIcon = rightIconProp || endIconProp;

  const color = colorProp || 'primary';
  const mainColor = palette[color].main;

  const textColor = 'white';

  const textStyle: StyleProp<TextStyle> = {
    ...(fill === 'solid' && { color: textColor }),
    ...(fill === 'outlined' && { color: mainColor }),
  };

  const fillStyle: StyleProp<ViewStyle> = {
    ...{ paddingVertical: spacing * 2, paddingHorizontal: spacing * 4 },
    ...(fill === 'solid' && { backgroundColor: mainColor }),
    ...(fill === 'outlined' && {
      borderColor: mainColor,
      borderWidth: 1,
      backgroundColor: textColor,
    }),
  };

  // 按下的背景色
  const underlayColor = fill === 'solid' ? palette[color].active : fill === 'outlined' ? palette.gray['gray-1'] : 'white';

  const boxChildren =
    loadingProp && loadingText ? (
      isValidElement(loadingText) ? (
        loadingText
      ) : (
        <>
          <IconFont size={20} name='add' color={mainColor} style={{ marginRight: 8 }} />
          <Text style={textStyle}>{loadingText}</Text>
        </>
      )
    ) : React.Children.count(children) > 1 ? (
      React.Children.map(children, (child) => renderNode(Text, child, { style: textStyle }))
    ) : (
      React.Children.map(children, (child) => renderNode(Text, child, { style: textStyle }))
    );

  const handlePressIn = (e: GestureResponderEvent) => {
    setIsActive(true);
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    setIsActive(false);
    onPressOut?.(e);
  };

  return (
    <TouchableHighlight
      style={[styles.button, fillStyle, style]}
      underlayColor={underlayColor}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...pressRest}
    >
      {boxChildren}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing,
  },
});

export default Button;
