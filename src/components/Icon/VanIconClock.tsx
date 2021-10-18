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

let VanIconClock: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m-28.444672 227.555328c-15.709184 0-28.444672 12.734464-28.444672 28.444672v256c0 15.70816 12.735488 28.443648 28.444672 28.443648h256c15.709184 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.735488-28.444672-28.444672-28.444672H512V312.889344c0-15.710208-12.735488-28.444672-28.444672-28.444672z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconClock.defaultProps = {
  size: 20,
};

VanIconClock = React.memo ? React.memo(VanIconClock) : VanIconClock;

export default VanIconClock;
