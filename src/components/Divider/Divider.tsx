import React, { Fragment, FunctionComponent } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import defaultTheme from '../../core/Theme/defaultTheme';
import renderNode from '../../utils/renderNode';
import Flex from '../Flex';

const {
  palette: { gray },
} = defaultTheme;
type OwnProps = {
  /**
   * 文字位置
   * @default center
   */
  contentPosition?: 'center' | 'left' | 'right';
  /**
   * 对分割线容器的样式进行修改
   */
  style?: StyleProp<ViewStyle>;
};

export type DividerProp = FunctionComponent<OwnProps>;

const Divider: DividerProp = (props) => {
  const { style, children, contentPosition = 'center' } = props;
  return (
    <Flex style={[styles.root, style]} justify={'between'}>
      <View style={[styles.divider, contentPosition === 'left' && styles.short]} />
      {!!children && (
        <Fragment>
          {renderNode(Text, children, { style: styles.text })}
          <View style={[styles.divider, contentPosition === 'right' && styles.short]} />
        </Fragment>
      )}
    </Flex>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 0,
    marginTop: 16,
    marginBottom: 16,
  },
  divider: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    height: 1,
    backgroundColor: gray['gray-1'],
  },
  text: {
    marginLeft: 8,
    marginRight: 8,
  },
  short: {
    maxWidth: '10%',
  },
});

export default Divider;
