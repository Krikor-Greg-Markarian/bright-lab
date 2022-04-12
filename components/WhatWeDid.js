import React from 'react';
import PlusSvgr from '../svgr/PlusSvgr';
import cn from 'classnames';
const WhatWeDid = (props) => {
  return (
    <div className={cn('container mx-auto')}>
      <div className={cn('grid grid-cols-2')}>
        <div className={cn('col-span-1 pt-10')}>
          <div className={cn('uppercase pb-4')}>{props.title}</div>
          <div className={cn('flex')}>
            <div className={cn('flex-shrink')}>
              <PlusSvgr />
            </div>
            <div className={cn('flex-shrink pl-2')}>{props.subTitle1}</div>
          </div>
          <div className={cn('flex')}>
            <div className={cn('flex-shrink')}>
              <PlusSvgr />
            </div>
            <div className={cn('flex-shrink pl-2')}>{props.subTitle2}</div>
          </div>
          <div className={cn('flex')}>
            <div className={cn('flex-shrink')}>
              <PlusSvgr />
            </div>
            <div className={cn('flex-shrink pl-2')}>{props.subTitle3}</div>
          </div>
          <div className={cn('flex')}>
            <div className={cn('flex-shrink')}>
              <PlusSvgr />
            </div>
            <div className={cn('flex-shrink pl-2')}>{props.subTitle4}</div>
          </div>
          <div className={cn('flex')}>
            <div className={cn('flex-shrink')}>
              <PlusSvgr />
            </div>
            <div className={cn('flex-shrink pl-2')}>{props.subTitle5}</div>
          </div>
        </div>
        <div className={cn('col-span-1')}>
          <div className={cn('flex justify-center items-center')}>
            <img
              src="https://cdn.pixabay.com/photo/2022/04/09/17/30/coffee-7121939__340.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDid;
