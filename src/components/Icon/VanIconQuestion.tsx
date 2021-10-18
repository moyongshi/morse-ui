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

let VanIconQuestion: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.334656 0 455.110656 203.776 455.110656 455.110656 0 251.334656-203.776 455.110656-455.110656 455.110656-251.334656 0-455.110656-203.776-455.110656-455.110656 0-251.334656 203.776-455.110656 455.110656-455.110656z m-4.056064 593.276928c-13.084672 0-23.779328 3.753984-31.857664 12.515328-9.443328 8.078336-13.824 18.772992-13.824 31.857664 0 12.515328 4.380672 23.153664 13.824 31.915008 8.078336 8.704 18.772992 13.084672 31.85664 13.084672 12.573696 0 23.780352-4.380672 33.16736-12.459008 8.704-8.817664 13.084672-19.39968 13.084672-32.540672 0-13.084672-4.380672-23.779328-13.084672-31.857664-8.761344-8.761344-20.025344-12.515328-33.16736-12.515328z m10.667008-365.7216c-45.682688 0-81.92 13.084672-108.146688 39.99232-26.907648 26.283008-39.99232 61.89568-39.99232 107.577344v1.024c0 18.374656 14.790656 33.222656 33.166336 33.222656 18.318336 0 33.166336-14.848 33.166336-33.222656 0-0.398336-0.113664-1.024-0.113664-1.024 0-27.59168 5.574656-49.379328 16.838656-64.398336 12.515328-17.521664 33.108992-26.283008 61.326336-26.283008 22.470656 0 39.99232 6.257664 52.451328 18.774016 11.889664 12.515328 18.204672 29.411328 18.204672 51.25632 0 16.27136-5.689344 31.232-16.953344 45.625344l-10.638336 11.88864c-38.683648 34.361344-61.780992 60.416-71.28064 77.484032-14.166016 25.542656-11.606016 49.152-11.606016 49.152 0 18.317312 14.905344 33.165312 33.222656 33.165312 18.37568 0 30.492672-12.628992 33.16736-33.165312 0 0 3.412992-19.115008 10.29632-31.63136 5.632-11.206656 14.39232-21.901312 25.6-31.85664 30.094336-25.657344 47.558656-41.92768 53.134336-48.811008 15.017984-19.968 23.09632-45.625344 23.09632-76.23168 0-37.48864-12.457984-67.526656-36.806656-89.428992-25.03168-22.470656-57.515008-33.108992-98.132992-33.108992z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconQuestion.defaultProps = {
  size: 20,
};

VanIconQuestion = React.memo ? React.memo(VanIconQuestion) : VanIconQuestion;

export default VanIconQuestion;
