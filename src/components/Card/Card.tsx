import React, { FunctionComponent, ReactNode, VoidFunctionComponent } from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import renderNode from '../../utils/renderNode';
import Flex from '../Flex';
import cardStyle from './styles';

type OwnProps = {
  /**
   * 标准尺寸
   */
  size?: CardSizeType;
  /**
   * 标题左侧的图标
   */
  avatar?: ((size: number) => ReactNode) | ReactNode;
  /**
   * 左侧图标区
   */
  title?: ReactNode;
  /**
   * 附加提示
   */
  description?: ReactNode;
  /**
   * 卡片右上角的操作区域
   * 支持图片的大小定制
   */
  extra?: ((size: number) => ReactNode) | ReactNode;
  /**
   * Card style
   */
  style?: StyleProp<ViewStyle>;
  /**
   * header style
   */
  headerStyle?: StyleProp<ViewStyle>;
  /**
   * body style
   */
  bodyStyle?: StyleProp<ViewStyle>;
  /**
   * 是否展示边框
   * @default true
   */
  bordered?: boolean;
  testID?: string;
};

export type CardSizeType = 'default' | 'small' | 'large';
export type CardProps = FunctionComponent<OwnProps>;

// @ts-ignore 样式定义过于复杂
const cardStyles = StyleSheet.create(cardStyle);

/**
 * 卡片
 * 1、整体支持点击
 * 2、区分header和body区域，分别支持点击操作
 * 3、一定要设置宽度，否则无法正常显示
 * @param {React.PropsWithChildren<OwnProps>} props
 * @return {JSX.Element}
 * @constructor
 */
const Card: CardProps = (props) => {
  const {
    children,
    bordered = true,
    size = 'default',
    style: styleProp,
    testID,
    headerStyle: headerStyleProp,
    bodyStyle: bodyStyleProp,
    ...restProps
  } = props;

  const style: StyleProp<ViewStyle> = [cardStyles.root, cardStyles[`${size}Root`], bordered && cardStyles.rootBorder, styleProp].filter(Boolean);
  const headerStyle: StyleProp<ViewStyle> = [cardStyles.header, cardStyles[`${size}Header`], headerStyleProp].filter(Boolean);
  const bodyStyle: StyleProp<ViewStyle> = [cardStyles.body, cardStyles.divider, cardStyles[`${props.size}Body`], bodyStyleProp].filter(Boolean);

  return (
    <Flex style={style} direction={'column'} align={'stretch'} testID={testID}>
      {(!!props.title || !!props.extra) && <Meta size={size} style={headerStyle} {...restProps} />}
      {!!children && <Flex style={bodyStyle}>{props.children}</Flex>}
    </Flex>
  );
};

const SizeMap = {
  large: 22,
  default: 20,
  small: 18,
};

type MetaType = Pick<OwnProps, 'extra' | 'title' | 'avatar' | 'description' | 'size'> & { style?: StyleProp<ViewStyle> };

/**
 * 头部
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const Meta: VoidFunctionComponent<MetaType> = (props) => {
  const { avatar, title, description, extra, style, size } = props;

  const _renderAvatar = () => {
    if (!avatar) return null;
    return <Flex style={cardStyles.avatar}>{typeof avatar === 'function' ? avatar(SizeMap[size || 'default'] || 20) : avatar}</Flex>;
  };

  const _renderDetail = () => {
    return (
      <Flex style={cardStyles.detail} direction={'column'} align={'start'}>
        {renderNode(Text, title, { style: cardStyles[`${size}Title`] })}
        {renderNode(Text, description, { style: cardStyles[`${size}Desc`] })}
      </Flex>
    );
  };

  const _renderExtra = () => {
    if (!extra) return null;
    return <Flex style={cardStyles.extra}>{typeof extra === 'function' ? extra(SizeMap[size || 'default'] || 20) : renderNode(Text, extra)}</Flex>;
  };

  return (
    <Flex style={style} justify={'between'}>
      {_renderAvatar()}
      {_renderDetail()}
      {_renderExtra()}
    </Flex>
  );
};

type ECardProps = CardProps & { Meta: typeof Meta };

const ECard = Card as ECardProps;
ECard.Meta = Meta;

export default ECard;
