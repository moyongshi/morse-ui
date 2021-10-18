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

let VanIconStarO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M720.692224 636.6976l170.748928-191.096832-250.462208-54.23616L512 169.920512 383.021056 391.364608l-250.462208 54.23616 170.748928 191.096832-25.81504 254.963712L512 788.32128l234.507264 103.340032-25.81504-254.963712zM512 850.48832L255.744 963.412992c-14.37696 6.335488-31.16544-0.183296-37.499904-14.558208a28.444672 28.444672 0 0 1-2.270208-14.336l28.208128-278.60992L57.6 447.08864c-10.468352-11.71456-9.45664-29.696 2.25792-40.163328a28.444672 28.444672 0 0 1 12.932096-6.588416l273.690624-59.267072 140.941312-241.98144c7.906304-13.574144 25.320448-18.168832 38.895616-10.262528a28.444672 28.444672 0 0 1 10.262528 10.262528l140.941312 241.98144 273.690624 59.267072c15.353856 3.323904 25.105408 18.465792 21.78048 33.819648a28.444672 28.444672 0 0 1-6.58944 12.93312L779.81696 655.906816l28.208128 278.60992c1.583104 15.629312-9.8048 29.58336-25.434112 31.16544-4.89472 0.495616-9.833472-0.28672-14.336-2.271232L512 850.489344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconStarO.defaultProps = {
  size: 20,
};

VanIconStarO = React.memo ? React.memo(VanIconStarO) : VanIconStarO;

export default VanIconStarO;
