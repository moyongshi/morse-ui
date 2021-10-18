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

let VanIconPaid: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.777664 341.332992v455.11168H910.22336V341.332992H113.77664z m682.667008-170.665984c31.418368 0 56.88832 25.469952 56.88832 56.88832v56.889344h56.889344c31.418368 0 56.88832 25.469952 56.88832 56.88832v455.11168c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-512l739.555328-0.001024v-113.77664z m170.665984 227.555328v56.88832H682.667008c-62.83776 0-113.777664 50.940928-113.777664 113.778688 0 62.83776 50.939904 113.77664 113.77664 113.77664h284.444672v56.889344H682.667008C588.409856 739.555328 512 663.145472 512 568.889344c0-94.257152 76.41088-170.667008 170.667008-170.667008h284.443648z m-270.221312 128c23.563264 0 42.665984 19.10272 42.665984 42.667008 0 23.563264-19.10272 42.665984-42.665984 42.665984-23.564288 0-42.667008-19.10272-42.667008-42.665984 0-23.564288 19.10272-42.667008 42.667008-42.667008zM596.51072 70.915072l0.878592 0.007168c19.326976 0.321536 38.008832 10.487808 48.376832 28.44672l41.163776 71.297024h109.513728v56.889344h-76.668928l32.835584 56.87296 20.355072 35.25632-67.25632-2.714624-109.2096-189.156352-299.077632 172.672-106.341376-4.293632 20.451328-11.808768 98.461696-56.846336h-167.77216v0.018432c-15.709184 0-28.444672 12.735488-28.444672 28.444672s12.735488 28.444672 28.444672 28.444672v56.88832c-18.18624 0-35.04128-5.68832-48.887808-15.382528l-36.462592-0.002048v-71.110656h0.026624l0.002048-0.248832c0.741376-45.715456 37.431296-82.692096 83.034112-83.892224l0.001024-0.048128h268.592128L568.05376 78.54592c8.98048-5.183488 18.784256-7.642112 28.45696-7.630848z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconPaid.defaultProps = {
  size: 20,
};

VanIconPaid = React.memo ? React.memo(VanIconPaid) : VanIconPaid;

export default VanIconPaid;
