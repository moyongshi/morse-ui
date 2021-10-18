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

let VanIconSort: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M454.658048 164.202496l0.339968 6.464512v682.669056c0 31.418368-25.469952 56.88832-56.88832 56.88832-29.174784 0-53.220352-21.960704-56.506368-50.253824l-0.382976-6.63552V307.99872L210.78016 438.450176c-20.507648 20.507648-52.77696 22.084608-75.094016 4.731904l-5.359616-4.731904c-20.507648-20.507648-22.085632-52.77696-4.732928-75.094016l4.732928-5.359616 227.556352-227.556352c34.279424-34.279424 91.835392-12.547072 96.775168 33.762304z m171.008-50.538496c29.17376 0 53.219328 21.961728 56.505344 50.254848l0.382976 6.634496v545.338368L812.99456 585.439232c20.507648-20.507648 52.77696-22.085632 75.094016-4.732928l5.359616 4.732928c20.507648 20.507648 22.085632 52.77696 4.732928 75.092992l-4.732928 5.359616-227.556352 227.556352c-34.279424 34.280448-91.835392 12.548096-96.775168-33.76128l-0.339968-6.465536V170.553344C568.776704 139.133952 594.246656 113.664 625.664 113.664z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconSort.defaultProps = {
  size: 20,
};

VanIconSort = React.memo ? React.memo(VanIconSort) : VanIconSort;

export default VanIconSort;
