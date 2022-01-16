import React, { FunctionComponent } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type OwnProps = {
  style?: StyleProp<ViewStyle>;
};

/**
 * 添加全局额外样式
 * @param {Pick<OwnProps & {children?: React.ReactNode | undefined}, "style" | "children">} rest
 * @return {JSX.Element}
 * @constructor
 */
const Surface: FunctionComponent<OwnProps> = ({ ...rest }) => {
  return <View {...rest} />;
};

export default Surface;
