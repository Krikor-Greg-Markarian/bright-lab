import React from 'react';
import cn from 'classnames';
const RightLeftText = (props) => {
  return (
    <div className={cn('container mx-auto')}>
      <div className={cn('grid grid-cols-2 ')}>
        <div className={cn('col-span-1 uppercase ')}>
          <div className={cn('mt-12')}>{props.title}</div>
        </div>
        <div className={cn('col-span-1')}>
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default RightLeftText;
