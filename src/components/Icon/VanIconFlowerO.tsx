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

let VanIconFlowerO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M296.81664 448.282624c7.478272 79.162368 71.632896 141.006848 151.015424 145.577984l58.811392 3.386368 73.549824-3.88096c81.55136-4.3008 146.962432-68.984832 152.174592-150.483968 5.157888-80.649216 7.888896-142.147584 8.251392-183.549952-24.129536 12.797952-35.155968 17.974272-50.33984 22.489088-35.006464 10.411008-69.658624 5.446656-92.6208-27.246592-1.71008-2.433024-14.502912-20.86912-18.786304-26.947584-8.196096-11.630592-15.481856-21.61664-22.708224-31.010816-14.12608-18.362368-26.939392-32.974848-38.135808-43.208704-7.583744-6.93248-12.450816-10.04032-11.42784-10.92096 0.294912 1.85856-11.782144 12.046336-25.94816 30.175232-16.979968 21.72928-34.342912 50.61632-45.266944 73.619456-18.737152 39.45472-56.503296 49.031168-94.103552 39.013376-16.352256-4.356096-27.122688-9.37984-55.4752-24.083456-0.510976 37.736448 2.99008 102.172672 11.011072 187.071488z m244.722688 204.091392V908.6464h-56.88832V652.96384l-40.0896-2.30912c-107.435008-6.185984-194.259968-89.884672-204.38016-197.021696-13.316096-140.954624-15.097856-224.254976-5.347328-249.901056 20.205568-53.139456 128.407552 61.847552 149.163008 18.14528 20.754432-43.70432 76.619776-135.435264 122.509312-136.53504 45.888512-1.098752 109.676544 96.62976 137.704448 136.534016 28.027904 39.90528 146.44736-91.789312 152.296448-9.029632 2.65216 37.5296 0.196608 115.418112-7.366656 233.66656-7.05536 110.299136-95.58016 197.840896-205.949952 203.66336l-41.6512 2.197504z m-111.525888 229.25312l-53.771264 18.572288c-38.41536-111.219712-80.028672-162.09408-120.155136-160.5888-10.706944-0.00512-24.654848 7.799808-39.15776 21.822464-5.542912 5.36064-10.71616 11.175936-15.454208 17.13664-2.57024 3.233792-7.549952 10.01472-7.892992 10.42432l-43.640832-36.494336c-18.014208 21.542912 14.774272-19.712 27.4432-31.963136 24.103936-23.30624 50.05312-37.82656 77.633536-37.794816 72.758272-2.766848 129.164288 66.19136 174.995456 198.885376z m83.074048-0.144384c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672zM404.036608 865.25952c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672z m370.726912-182.51776c27.579392-0.031744 53.528576 14.487552 77.632512 37.79584 11.72992 11.341824 40.70912 47.54944 30.640128 35.755008a28.305408 28.305408 0 0 1 4.772864 15.775744c0 15.710208-12.734464 28.444672-28.444672 28.444672-9.439232 0-17.804288-4.59776-22.97856-11.675648l-0.187392 0.156672c-0.342016-0.4096-5.322752-7.190528-7.892992-10.42432-4.738048-5.960704-9.910272-11.776-15.454208-17.13664-14.502912-14.022656-28.449792-21.827584-39.15776-21.822464-40.126464-1.50528-81.739776 49.369088-120.154112 160.5888l-0.013312-0.004096c-3.410944 11.884544-14.3616 20.581376-27.343872 20.581376-15.70816 0-28.443648-12.735488-28.443648-28.444672a28.3648 28.3648 0 0 1 2.075648-10.688512l-0.047104-0.016384c45.832192-132.694016 102.238208-201.652224 174.99648-198.885376z m-604.096512 60.905472c15.70816 0 28.443648 12.734464 28.443648 28.444672 0 15.70816-12.734464 28.443648-28.443648 28.443648-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconFlowerO.defaultProps = {
  size: 20,
};

VanIconFlowerO = React.memo ? React.memo(VanIconFlowerO) : VanIconFlowerO;

export default VanIconFlowerO;
