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

let VanIconAwardO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 682.667008c157.093888 0 284.444672-127.350784 284.444672-284.444672 0-157.094912-127.350784-284.444672-284.444672-284.444672-157.093888 0-284.444672 127.34976-284.444672 284.444672 0 157.093888 127.350784 284.444672 284.444672 284.444672z m0 56.88832c-188.51328 0-341.332992-152.819712-341.332992-341.332992 0-188.51328 152.819712-341.332992 341.332992-341.332992 188.51328 0 341.332992 152.819712 341.332992 341.332992 0 188.51328-152.819712 341.332992-341.332992 341.332992z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 469.332992c39.273472 0 71.110656-31.837184 71.110656-71.110656s-31.83616-71.11168-71.110656-71.11168c-39.273472 0-71.110656 31.838208-71.110656 71.11168 0 39.273472 31.83616 71.110656 71.110656 71.110656z m0 56.889344c-70.692864 0-128-57.30816-128-128 0-70.692864 57.307136-128 128-128s128 57.307136 128 128c0 70.69184-57.307136 128-128 128zM398.222336 881.230848L512 833.035264l113.777664 48.195584V719.214592c-37.376 13.768704-75.220992 20.760576-113.390592 20.760576-38.354944 0-76.455936-7.059456-114.16576-20.958208v162.213888zM341.332992 626.1248c57.264128 37.974016 114.281472 56.961024 171.05408 56.961024 56.771584 0 113.53088-18.987008 170.279936-56.961024v298.04544c0 15.710208-12.735488 28.445696-28.444672 28.445696-3.812352 0-7.584768-0.766976-11.09504-2.2528L512 894.816256l-131.127296 55.544832c-14.465024 6.127616-31.159296-0.631808-37.286912-15.096832a28.444672 28.444672 0 0 1-2.2528-11.094016V626.1248z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

VanIconAwardO.defaultProps = {
  size: 20,
};

VanIconAwardO = React.memo ? React.memo(VanIconAwardO) : VanIconAwardO;

export default VanIconAwardO;
