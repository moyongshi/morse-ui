import React, { useState } from 'react';
import { Modal, StyleProp, ViewStyle } from 'react-native';

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
   * 开启时触发
   */
  onShow?: () => void;
  /**
   * 关闭后触发
   */
  afterClose?: () => void;
};

export type ModalRefType = {
  /**
   * 直接控制显示和隐藏
   * 但仍需要父级的刷新
   * @param visible
   */
  setVisible: (visible?: boolean) => void;
};

const CusModal = (props: ModalProps) => {
  const { onShow, afterClose, visible: visibleProp, children, ...rest } = props;

  const [visible, setVisible] = useState(visibleProp);

  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     setVisible,
  //   }),
  //   []
  // );

  const handleShow = () => {
    onShow?.();
  };

  const handleAfterClose = () => {
    afterClose?.();
  };

  return <Modal visible={visibleProp}>{children}</Modal>;
};

CusModal.displayName = 'CusModal';

export default CusModal;
