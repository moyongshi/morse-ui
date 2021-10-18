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

let VanIconPhoneO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M302.21312 170.636288c-0.740352 0-1.42336 0.05632-2.162688 0.05632-23.836672 1.024-52.905984 18.88768-88.745984 54.72768-143.076352 143.131648 139.776 429.339648 142.676992 432.24064 2.900992 2.788352 288.939008 285.924352 432.241664 142.620672 35.84-35.84 53.702656-64.852992 54.726656-88.68864 0.854016-22.016-11.945984-44.99968-41.699328-74.752-29.468672-29.526016-54.100992-43.46368-74.580992-41.586688-18.716672 1.820672-38.684672 18.31936-59.33568 49.09568-18.601984 31.174656-44.315648 40.675328-62.406656 42.894336-47.104 6.029312-102.798336-26.454016-177.436672-101.092352-74.694656-74.752-106.836992-131.12832-101.091328-177.379328 2.219008-18.147328 11.662336-43.804672 44.089344-63.260672 29.581312-19.854336 46.08-39.822336 47.899648-58.537984 1.93536-19.968-12.059648-45.056-41.641984-74.63936-28.672-28.672-51.2-41.698304-72.534016-41.698304m385.195008 727.209984c-171.121664 0-363.292672-189.609984-373.646336-199.964672-13.36832-13.42464-325.574656-329.78432-142.676992-512.681984 47.046656-47.04768 87.267328-69.745664 126.633984-71.339008 52.62336-1.990656 91.307008 32.256 117.248 58.25536 42.780672 42.722304 61.782016 82.146304 58.027008 120.37632-3.64032 36.97664-27.819008 70.029312-74.068992 101.033984-14.848 8.931328-17.35168 16.497664-18.091008 22.187008-1.820672 15.019008 6.713344 51.996672 84.878336 130.219008 78.108672 78.051328 115.086336 86.356992 130.219008 84.877312 5.68832-0.739328 13.254656-3.299328 21.390336-16.896 31.80032-47.444992 64.852992-71.68 101.830656-75.264 37.716992-4.265984 77.539328 15.132672 120.32 57.970688 25.998336 25.997312 60.416 66.445312 58.310656 117.30432-1.64864 39.31136-24.291328 79.531008-71.337984 126.577664-41.244672 41.244672-89.259008 57.344-139.036672 57.344"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconPhoneO.defaultProps = {
  size: 20,
};

VanIconPhoneO = React.memo ? React.memo(VanIconPhoneO) : VanIconPhoneO;

export default VanIconPhoneO;
