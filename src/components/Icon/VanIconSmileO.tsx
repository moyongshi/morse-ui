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

let VanIconSmileO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 877.714432c201.97888 0 365.714432-163.735552 365.714432-365.714432 0-201.97888-163.735552-365.714432-365.714432-365.714432-201.97888 0-365.714432 163.735552-365.714432 365.714432 0 201.97888 163.735552 365.714432 365.714432 365.714432z m0 60.952576C276.358144 938.667008 85.332992 747.641856 85.332992 512 85.332992 276.358144 276.358144 85.332992 512 85.332992c235.641856 0 426.667008 191.025152 426.667008 426.667008 0 235.641856-191.025152 426.667008-426.667008 426.667008z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M355.330048 402.285568m-48.761856 0a48.761856 48.761856 0 1 0 97.523712 0 48.761856 48.761856 0 1 0-97.523712 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M671.379456 402.285568m-48.761856 0a48.761856 48.761856 0 1 0 97.523712 0 48.761856 48.761856 0 1 0-97.523712 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M701.063168 562.796544c5.608448-15.869952 23.020544-24.18688 38.890496-18.578432 15.868928 5.609472 24.18688 23.020544 18.577408 38.890496C722.24256 685.778944 624.896 755.80928 514.23232 755.80928c-110.66368 0-208.011264-70.03136-244.299776-172.700672-5.609472-15.869952 2.70848-33.281024 18.578432-38.890496 15.868928-5.608448 33.28 2.70848 38.889472 18.578432 27.74528 78.497792 102.20032 132.06016 186.831872 132.06016 84.630528 0 159.085568-53.562368 186.830848-132.06016z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

VanIconSmileO.defaultProps = {
  size: 20,
};

VanIconSmileO = React.memo ? React.memo(VanIconSmileO) : VanIconSmileO;

export default VanIconSmileO;
