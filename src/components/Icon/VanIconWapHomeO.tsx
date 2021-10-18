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

let VanIconWapHomeO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.777664 455.110656c-10.223616-11.926528-8.84224-29.884416 3.085312-40.108032l358.11328-306.95424c21.305344-18.260992 52.742144-18.260992 74.046464 0l358.114304 306.95424c11.927552 10.223616 13.308928 28.18048 3.085312 40.108032s-28.18048 13.308928-40.108032 3.085312L512 151.241728l-358.11328 306.95424c-11.928576 10.223616-29.88544 8.84224-40.109056-3.085312z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M454.576128 853.337088c0 31.418368-25.516032 56.88832-56.991744 56.88832H227.657728c-31.475712 0-56.99072-25.473024-56.99072-56.892416V369.777664h56.99072v483.555328l169.92768 0.004096-0.028672-170.667008c-0.004096-31.418368 25.50784-56.892416 56.988672-56.895488l114.23744 0.003072c31.475712 0 56.991744 25.469952 56.991744 56.889344v170.665984h170.56768V386.23232h56.99072v467.100672c0 31.419392-25.515008 56.89344-56.99072 56.89344h-170.56768c-31.475712 0-56.99072-25.474048-56.99072-56.89344V682.667008l-114.236416-0.004096 0.028672 170.674176z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

VanIconWapHomeO.defaultProps = {
  size: 20,
};

VanIconWapHomeO = React.memo ? React.memo(VanIconWapHomeO) : VanIconWapHomeO;

export default VanIconWapHomeO;
