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

let VanIconDelete: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M144.384 445.39392c0 0.0256-0.02048 0.04608-0.04608 0.04608h-10.14784a0.04608 0.04608 0 0 1-0.04608-0.04608V435.2h10.24v10.19392zM145.92 434.176h-13.312a0.512 0.512 0 0 0 0 1.024h0.512v10.19392c0 0.590848 0.479232 1.07008 1.07008 1.07008h10.14784c0.590848 0 1.07008-0.479232 1.07008-1.07008V435.2h0.512a0.512 0.512 0 0 0 0-1.024z m-4.096 9.216a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m-5.12 0a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m2.56 0a0.512 0.512 0 0 0 0.512-0.512v-5.12a0.512 0.512 0 0 0-1.024 0v5.12a0.512 0.512 0 0 0 0.512 0.512m-3.584-10.24h7.168a0.512 0.512 0 0 0 0-1.024h-7.168a0.512 0.512 0 0 0 0 1.024"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M881.666048 227.447808c15.702016 0 28.444672 12.742656 28.444672 28.444672 0 15.700992-12.742656 28.444672-28.444672 28.444672h-28.444672V850.66752c0 32.82432-26.624 59.449344-59.44832 59.449344H230.00064c-32.82432 0-59.44832-26.624-59.44832-59.449344V284.337152h-28.444672c-15.702016 0-28.444672-12.74368-28.444672-28.444672 0-15.702016 12.742656-28.444672 28.444672-28.444672zM654.11072 398.109696c-15.700992 0-28.444672 12.742656-28.444672 28.443648v284.445696c0 15.700992 12.74368 28.444672 28.444672 28.444672 15.702016 0 28.444672-12.74368 28.444672-28.444672V426.553344c0-15.700992-12.742656-28.443648-28.444672-28.443648z m-284.444672 0c-15.702016 0-28.444672 12.742656-28.444672 28.443648v284.445696c0 15.700992 12.742656 28.444672 28.444672 28.444672 15.700992 0 28.444672-12.74368 28.444672-28.444672V426.553344c0-15.700992-12.74368-28.443648-28.444672-28.443648z m142.222336 0c-15.700992 0-28.444672 12.742656-28.444672 28.443648v284.445696c0 15.700992 12.74368 28.444672 28.444672 28.444672 15.700992 0 28.444672-12.74368 28.444672-28.444672V426.553344c0-15.700992-12.74368-28.443648-28.444672-28.443648zM312.77568 170.553344h398.22336c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.702016-12.74368-28.444672-28.444672-28.444672h-398.22336c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

VanIconDelete.defaultProps = {
  size: 20,
};

VanIconDelete = React.memo ? React.memo(VanIconDelete) : VanIconDelete;

export default VanIconDelete;
