import React, { ComponentProps, Fragment, isValidElement, ReactNode } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import IconFont from '../Icon';
import { themes, ThemeProvider, useTheme } from '../Theme';

type OwnProps = ComponentProps<typeof Pressable> & {
  /**
   * 不同的按钮样式
   * - `primary` - 边框型
   * - `dashed` - 填充型
   * - `text` - 无边框
   * - `default` - 无边框
   */
  type?: ButtonType;
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
   * 尺寸
   * @deprecated 暂不实现
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
   * 采用view的样式
   */
  style?: StyleProp<ViewStyle>;
};

export type ButtonProps = OwnProps;

/**
 * 按钮类型
 */
export type ButtonType = 'primary' | 'dashed' | 'text' | 'default';

/**
 * 按钮
 * 1、点击功能
 * 2、三种模式的样式
 */
const Button = ({
  type = 'default',
  disabled: disabledProp,
  loading: loadingProp,
  leftIcon: leftIconProp,
  startIcon: startIconProp,
  rightIcon: rightIconProp,
  endIcon: endIconProp,
  onPress,
  onLongPress,
  style,
  loadingText,
  children,
  ...rest
}: OwnProps) => {
  const handleLongPress = (e: GestureResponderEvent) => {
    onLongPress?.(e);
  };
  const theme = useTheme();

  const disabled = disabledProp || loadingProp;
  const startIcon = leftIconProp || startIconProp;
  const endIcon = rightIconProp || endIconProp;

  const boxChildren =
    loadingProp && loadingText ? (
      isValidElement(loadingText) ? (
        loadingText
      ) : (
        <>
          <IconFont size={20} name="add" color={theme.white} style={{ marginRight: 8 }} />
          <Text style={styles.text}>{loadingText}</Text>
        </>
      )
    ) : (
      children
    );

  /**
   * 处理UI层样式
   */
  const surfaceStyle = disabled ? {} : style;

  return (
    <Surface style={surfaceStyle} {...rest}>
      <Pressable style={styles.button} onPress={onPress} onLongPress={handleLongPress}>
        {boxChildren}
      </Pressable>
    </Surface>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    padding: 8,
  },
  icon: {
    // backgroundColor:C
  },
  text: {
    color: 'white',
  },
});

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
  return (
    // @ts-ignore
    <ThemeProvider theme={themes}>
      <View style={style}>{children}</View>
    </ThemeProvider>
  );
};

export default Button;
