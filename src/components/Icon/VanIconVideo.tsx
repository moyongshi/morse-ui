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

let VanIconVideo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 284.444672H113.77664V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v113.77664z m0 56.88832v512c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-512H910.22336zM284.444672 170.667008l57.2416 113.77664h56.88832l-57.2416-113.77664h-56.88832z m170.665984 0l57.2416 113.77664H569.2416L512 170.668032h-56.889344z m170.667008 0l57.2416 113.77664h56.88832l-57.2416-113.77664h-56.88832z m6.00576 452.108288a28.444672 28.444672 0 0 0 12.721152-12.721152c7.02464-14.051328 1.330176-31.136768-12.721152-38.162432L439.38816 475.69408a28.444672 28.444672 0 0 0-12.720128-3.003392c-15.710208 0-28.444672 12.735488-28.444672 28.444672v192.396288c0 4.415488 1.028096 8.77056 3.002368 12.720128 7.025664 14.051328 24.112128 19.746816 38.162432 12.721152l192.396288-96.197632z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconVideo.defaultProps = {
  size: 20,
};

VanIconVideo = React.memo ? React.memo(VanIconVideo) : VanIconVideo;

export default VanIconVideo;
