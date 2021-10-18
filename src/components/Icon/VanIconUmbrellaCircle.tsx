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

let VanIconUmbrellaCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M766.0544 512H257.923072c-17.521664 0-30.492672-15.587328-28.502016-33.052672 15.30368-132.096 121.458688-235.406336 254.123008-248.718336v-31.118336c0-15.700992 12.74368-28.443648 28.444672-28.443648 15.758336 0 28.444672 12.742656 28.444672 28.443648v31.11936c132.66432 13.312 238.819328 116.621312 254.121984 248.717312C796.547072 496.412672 783.633408 512 766.0544 512zM540.433408 739.555328c0 47.04768-38.28736 85.334016-85.334016 85.334016s-85.332992-38.28736-85.332992-85.334016v-28.444672c0-15.700992 12.742656-28.443648 28.444672-28.443648 15.758336 0 28.444672 12.742656 28.444672 28.443648v28.444672c0 15.644672 12.8 28.444672 28.443648 28.444672 15.702016 0 28.444672-12.8 28.444672-28.444672V568.889344h56.889344v170.665984zM511.988736 56.889344c-251.33568 0-455.11168 203.776-455.11168 455.110656 0 251.334656 203.776 455.110656 455.11168 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconUmbrellaCircle.defaultProps = {
  size: 20,
};

VanIconUmbrellaCircle = React.memo ? React.memo(VanIconUmbrellaCircle) : VanIconUmbrellaCircle;

export default VanIconUmbrellaCircle;
