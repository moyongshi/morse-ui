import React, { ReactNode, VoidFunctionComponent } from 'react';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

import Flex from '../Flex';

type OwnProps = {
  title: (props: { size: number }) => ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  subTitle?: (props: { size: number }) => ReactNode;
  subTitleStyle?: StyleProp<TextStyle>;
  left?: (props: { size: number }) => ReactNode;
  leftStyle?: StyleProp<ViewStyle>;
  right?: (props: { size: number }) => ReactNode;
  rightStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  /**
   * 允许整体点击
   */
  onPress?: () => void;
  testID?: string;
};

const CardTitle: VoidFunctionComponent<OwnProps> = (props) => {
  const { style, title, titleStyle, subTitle, subTitleStyle, leftStyle, left, rightStyle, right, ...rest } = props;
  return (
    <Flex>
      <Flex style={leftStyle}></Flex>
      <Flex>
        <Text></Text>
        <Text></Text>
      </Flex>
      <Flex style={rightStyle}></Flex>
    </Flex>
  );
};

export default CardTitle;
