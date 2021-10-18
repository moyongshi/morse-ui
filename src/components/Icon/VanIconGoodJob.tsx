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

let VanIconGoodJob: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.220352 910.11072V398.246912c17.26976-6.244352 29.75232-11.569152 37.44768-15.9744 21.505024-12.312576 39.745536-29.079552 54.720512-50.300928 22.723584-32.201728 26.955776-47.039488 51.61984-137.167872 1.619968-5.922816 4.880384-14.014464 9.7792-24.274944 22.669312-37.996544 54.940672-56.951808 96.813056-56.864768 40.452096 0 72.810496 18.95424 97.0752 56.864768 6.047744 10.46528 10.329088 22.153216 12.843008 35.06688 2.514944 12.91264 2.514944 27.74016 0 44.48256l-44.780544 156.270592c-0.792576 2.480128-0.792576 4.291584 0 5.436416 0.854016 1.232896 2.100224 1.849344 3.739648 1.849344h136.04352l-0.150528 0.316416h17.739776c52.799488 0 96 41.6 96 94.399488 0 8.000512-1.600512 16-3.2 24.000512l-47.879168 305.759232c-9.6 41.6-48 72.000512-92.8 72.000512h-425.0112z m-56.889344 0H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-398.22336c0-31.418368 25.469952-56.88832 56.889344-56.88832h113.777664V910.11072z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconGoodJob.defaultProps = {
  size: 20,
};

VanIconGoodJob = React.memo ? React.memo(VanIconGoodJob) : VanIconGoodJob;

export default VanIconGoodJob;
