import React from 'react';

import { Transition } from './Trasitions';
import type { IFadeProps } from './types';

const Fade = ({children, style, ...props}: IFadeProps, ref?: any) => {
  const {in: animationState, entryDuration = 0, exitDuration = 0, testID} = props;

  return (
    <Transition
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: entryDuration}}}
      exit={{opacity: 0, transition: {duration: exitDuration}}}
      style={style}
      visible={animationState}
      testID={testID}
      ref={ref}
    >
      {children}
    </Transition>
  );
};

export default React.memo(React.forwardRef(Fade));
