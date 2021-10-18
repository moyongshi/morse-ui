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

let VanIconNewArrival: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M739.555328 227.555328C896.65024 227.555328 1024 354.906112 1024 512c0 157.093888-127.34976 284.444672-284.444672 284.444672H0V227.555328h739.555328zM297.764864 424.2688a391.79776 391.79776 0 0 1-13.328384 41.257984H254.3616c-4.784128-15.91808-9.56928-29.56288-14.6944-41.25696l-31.44192 11.369472c5.46816 9.096192 10.252288 19.167232 14.353408 29.887488H187.71968v30.862336h64.933888v26.313728H193.18784v30.861312h59.465728v76.992512c0 6.172672-4.10112 9.4208-11.620352 9.4208-4.10112 0-8.885248-0.973824-14.011392-2.27328l7.860224 31.186944h17.77152c23.580672 0 35.54304-10.07104 35.54304-30.212096v-85.11488h56.046592v-30.861312h-56.047616v-26.313728h61.857792v-30.862336h-33.149952c4.442112-9.4208 8.543232-19.49184 12.644352-30.536704z m178.738176-55.226368c-33.491968 12.345344-71.08608 18.8416-113.463296 19.49184v140.990464c-1.36704 47.755264-11.96032 85.11488-31.09888 112.0768l25.63072 25.665536c24.948736-34.436096 38.27712-80.24064 39.986176-137.742336v-30.862336h36.909056v169.253888h35.201024V498.6624h31.44192v-32.160768H397.55776v-50.354176c35.201024-1.948672 67.325952-7.471104 96.374784-16.56832z m192.408576 145.539072H540.069888v148.13696h34.859008v-15.26784h59.465728v15.26784h34.516992V514.581504z m159.60064 0H695.56736v148.13696h34.859008v-15.26784h62.541824v15.26784h35.54304V514.581504zM212.3264 566.234112c-5.810176 26.313728-16.062464 51.328-30.758912 74.718208l29.732864 17.8688c14.354432-24.36608 25.290752-52.953088 33.150976-86.089728z m110.728192-1.948672l-29.390848 7.471104c7.518208 19.167232 14.012416 38.98368 19.13856 59.12576l30.07488-11.045888c-4.785152-16.892928-11.620352-35.40992-19.822592-55.552z m311.340032-17.867776v69.520384h-59.465728v-69.520384h59.465728z m158.574592 0v69.520384h-62.541824v-69.520384h62.541824zM782.71488 377.163776H586.206208v115.976192h196.509696V377.163776z m-35.884032 31.83616v52.303872H622.09024v-52.302848h124.740608zM273.842176 363.52l-36.91008 5.84704c4.785152 6.822912 9.227264 14.29504 13.328384 22.41536h-59.123712v31.186944h156.86656v-31.18592h-62.199808c-4.10112-10.395648-7.860224-19.817472-11.961344-28.263424z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconNewArrival.defaultProps = {
  size: 20,
};

VanIconNewArrival = React.memo ? React.memo(VanIconNewArrival) : VanIconNewArrival;

export default VanIconNewArrival;
