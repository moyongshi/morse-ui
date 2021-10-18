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

let VanIconStopCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-113.231872-597.58592c-15.709184 0-28.444672 12.734464-28.444672 28.443648v227.555328c0 15.710208 12.735488 28.444672 28.444672 28.444672h227.555328c15.710208 0 28.444672-12.734464 28.444672-28.444672V397.968384c0-15.709184-12.734464-28.444672-28.444672-28.444672H398.768128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconStopCircle.defaultProps = {
  size: 20,
};

VanIconStopCircle = React.memo ? React.memo(VanIconStopCircle) : VanIconStopCircle;

export default VanIconStopCircle;
