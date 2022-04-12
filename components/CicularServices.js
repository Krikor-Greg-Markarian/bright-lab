import React from 'react';
import cn from 'classnames';
import MobileAppSvgr from '../svgr/MobileAppSvgr';
const CicularServices = (props) => {
  return (
    <div className={cn('grid grid-cols-5')}>
      <div className={cn('col-span-1')}>
        <div
          className={cn(
            'rounded-full w-40 h-40 border-2 border-gray-200 shadow-2xl'
          )}
        >
          <div className={cn('flex justify-center items-center')}>
            <MobileAppSvgr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CicularServices;
