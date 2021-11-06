import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {
  Modal as RNModal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import Color from 'color';

export type ModalProps = {
  /**
   * 渲染内容
   */
  children: React.ReactNode;
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 是否启用遮罩
   */
  mask?: boolean;
  /**
   * 是否运行点击遮罩关闭
   */
  maskClosable?: boolean;
  /**
   * 遮罩样式
   */
  maskStyle?: StyleProp<ViewStyle>;
  /**
   * 遮罩类名
   */
  maskClassName?: string;
  /**
   * 内容区样式
   */
  bodyStyle?: StyleProp<ViewStyle>;
  /**
   * 内容区是否居中
   */
  center?: boolean;
  /**
   * 开启时触发
   */
  onShow?: () => void;
  /**
   * 关闭后触发
   */
  afterClose?: () => void;
  /**
   * testID
   */
  testID?: string;
};

export type ModalRefType = {
  /**
   * 直接控制显示和隐藏
   * 但仍需要父级的刷新
   * @param visible
   */
  setVisible: (visible?: boolean) => void;
};

const Modal = forwardRef<ModalRefType, ModalProps>((props, ref) => {
  const {
    mask = true,
    maskClosable = true,
    maskStyle,
    onShow,
    afterClose,
    visible: visibleProp,
    children,
    bodyStyle,
    center,
    ...rest
  } = props;

  const [visible, setVisible] = useState(visibleProp);

  // 可控的visible
  useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props]);

  useImperativeHandle(
    ref,
    () => ({
      setVisible,
    }),
    []
  );

  /**
   * Modal 展示之后
   */
  const handleShow = () => {
    onShow?.();
  };

  /**
   * Modal完全关闭之后
   */
  const handleAfterClose = () => {
    afterClose?.();
  };

  /**
   * 是否允许点击遮罩关闭
   */
  const handleMaskClose = () => {
    if (!maskClosable) return;
    setVisible(false);
    handleAfterClose();
  };

  return (
    <RNModal
      {...rest}
      visible={visible}
      style={[styles.root]}
      onShow={handleShow}
      onRequestClose={handleAfterClose}
      animationType="fade"
    >
      {mask && (
        <TouchableWithoutFeedback onPress={handleMaskClose}>
          <View style={[styles.mask, maskStyle]} />
        </TouchableWithoutFeedback>
      )}
      <View testID={'body'} style={[styles.body, bodyStyle]}>
        {children}
      </View>
    </RNModal>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  mask: {
    backgroundColor: Color('grey').lighten(0.5).hex(),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  body: {
    zIndex: 99,
    position: 'absolute',
  },
});

Modal.displayName = 'Modal';

export default Modal;
