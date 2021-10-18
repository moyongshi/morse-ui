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

let VanIconReplay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M588.7744 75.798528L759.43936 189.576192c16.888832 11.25888 16.888832 36.07552 0 47.3344L588.7744 350.68928c-18.90304 12.602368-44.222464-0.948224-44.222464-23.666688V224.11264c-146.425856-13.402112-289.221632 72.40192-341.876736 217.071616C139.99104 613.408768 228.790272 803.84 401.01376 866.52416c172.223488 62.68416 362.65472-26.115072 425.33888-198.33856a334.544896 334.544896 0 0 0 14.629888-53.619712c0.193536-1.047552 0.410624-2.085888 0.651264-3.11296a33.26976 33.26976 0 0 1 1.805312-7.677952c6.268928-17.22368 25.311232-26.102784 42.533888-19.83488 17.222656 6.268928 26.10176 25.312256 19.83488 42.533888-3.540992 21.681152-9.353216 43.1616-17.087488 64.411648-75.220992 206.667776-303.73888 313.227264-510.406656 238.006272C171.644928 853.670912 65.08544 625.152 140.307456 418.485248c62.466048-171.624448 230.647808-274.21184 404.24448-260.989952v-58.03008c0-22.71744 25.319424-36.269056 44.222464-23.666688z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconReplay.defaultProps = {
  size: 20,
};

VanIconReplay = React.memo ? React.memo(VanIconReplay) : VanIconReplay;

export default VanIconReplay;
