/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let VanIconFriendsO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M323.253248 427.812864v57.302016c-118.257664 15.788032-209.475584 117.060608-209.475584 239.638528l0.009216-1.011712c0.03584 0.587776 0.054272 1.181696 0.054272 1.778688 0 15.709184-12.734464 28.444672-28.444672 28.444672-15.70816 0-28.443648-12.735488-28.443648-28.444672 0-0.256 0.003072-0.512 0.01024-0.768h-0.073728c0-154.034176 116.606976-280.834048 266.36288-296.93952zM321.156096 200.3968l0.47104 0.004096c15.492096 0.25088 27.973632 12.888064 27.973632 28.440576 0 15.709184-12.735488 28.444672-28.444672 28.444672-47.128576 0-85.332992 38.20544-85.332992 85.332992 0 47.128576 38.20544 85.334016 85.332992 85.334016v56.88832c-78.546944 0-142.222336-63.674368-142.222336-142.222336 0-78.546944 63.675392-142.222336 142.22336-142.222336z m245.353472 282.042368c188.51328 0 341.332992 152.820736 341.332992 341.334016H850.95424c0-157.094912-127.350784-284.444672-284.444672-284.444672l-4.704256 0.037888c-154.924032 2.511872-279.740416 128.882688-279.740416 284.40576H225.1776c0-188.512256 152.819712-341.332992 341.332992-341.332992z m-245.353472-54.48704c15.709184 0 28.444672 12.735488 28.444672 28.444672 0 15.710208-12.735488 28.444672-28.444672 28.444672s-28.444672-12.734464-28.444672-28.444672c0-15.70816 12.735488-28.443648 28.444672-28.443648z m-67.535872 367.376384c15.710208 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.734464 28.443648-28.444672 28.443648-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672z m625.777664 0c15.710208 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.734464 28.443648-28.444672 28.443648-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672zM568.037376 455.110656c78.546944 0 142.222336-63.674368 142.222336-142.221312 0-78.547968-63.675392-142.22336-142.222336-142.22336-78.546944 0-142.222336 63.675392-142.222336 142.22336 0 78.546944 63.675392 142.221312 142.222336 142.221312z m0 56.889344c-109.966336 0-199.110656-89.145344-199.110656-199.110656 0-109.96736 89.14432-199.11168 199.110656-199.11168 109.966336 0 199.110656 89.145344 199.110656 199.11168C767.148032 422.854656 678.003712 512 568.037376 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconFriendsO.defaultProps = {
  size: 20,
};

VanIconFriendsO = React.memo ? React.memo(VanIconFriendsO) : VanIconFriendsO;

export default VanIconFriendsO;
