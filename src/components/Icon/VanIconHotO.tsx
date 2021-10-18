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

let VanIconHotO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 113.985536L395.423744 230.560768H230.560768v164.864L113.985536 512l116.575232 116.576256v164.862976h164.864L512 910.014464l116.576256-116.575232h164.862976v-164.864L910.014464 512 793.439232 395.423744V230.560768h-164.864L512 113.985536z m-140.13952 59.686912l99.912704-99.913728c22.216704-22.216704 58.236928-22.216704 80.453632 0l99.912704 99.913728h141.299712c31.418368 0 56.88832 25.469952 56.88832 56.88832v141.299712l99.913728 99.912704c22.216704 22.216704 22.216704 58.236928 0 80.453632l-99.913728 99.912704v141.299712c0 31.418368-25.469952 56.88832-56.88832 56.88832H652.13952l-99.912704 99.913728c-22.216704 22.216704-58.236928 22.216704-80.453632 0l-99.912704-99.913728H230.560768c-31.418368 0-56.88832-25.469952-56.88832-56.88832V652.13952L73.75872 552.226816c-22.216704-22.216704-22.216704-58.236928 0-80.453632l99.913728-99.912704V230.560768c0-31.418368 25.469952-56.88832 56.88832-56.88832h141.299712zM284.65152 429.48096h44.519424v57.752576h48.64512v-57.752576h44.716032v165.03808H377.81504V527.75936h-48.64512v66.758656H284.65152v-165.03808z m161.859584 82.63168c0-26.943488 6.551552-47.920128 19.654656-62.930944 13.103104-15.009792 31.34976-22.514688 54.738944-22.514688 23.979008 0 42.45504 7.3728 55.427072 22.121472 12.972032 14.747648 19.458048 35.4048 19.458048 61.97248 0 19.289088-2.833408 35.105792-8.500224 47.45216-5.666816 12.345344-13.856768 21.952512-24.568832 28.819456-10.71104 6.866944-24.060928 10.30144-40.046592 10.30144-16.248832 0-29.696-2.965504-40.342528-8.894464-10.646528-5.92896-19.277824-15.309824-25.894912-28.143616-6.617088-12.833792-9.925632-28.895232-9.925632-48.183296z m44.5184 0.22528c0 16.66048 2.702336 28.63104 8.107008 35.91168 5.405696 7.28064 12.75904 10.919936 22.063104 10.919936 9.565184 0 16.968704-3.564544 22.21056-10.694656 5.240832-7.130112 7.861248-19.926016 7.861248-38.388736 0-15.536128-2.73408-26.887168-8.205312-34.054144-5.471232-7.168-12.891136-10.752-22.259712-10.752-8.97536 0-16.182272 3.64032-21.620736 10.92096-5.43744 7.279616-8.15616 19.324928-8.15616 36.13696z m113.409024-82.85696h135.324672v40.753152h-45.403136v124.284928h-44.5184V470.234112h-45.403136v-40.753152z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconHotO.defaultProps = {
  size: 20,
};

VanIconHotO = React.memo ? React.memo(VanIconHotO) : VanIconHotO;

export default VanIconHotO;
