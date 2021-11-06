import React, { FunctionComponent } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type OwnProps = {
  style?: StyleProp<ViewStyle>;
};

const Surface: FunctionComponent<OwnProps> = ({ ...rest }) => {
  return <View {...rest} />;
};

export default Surface;
