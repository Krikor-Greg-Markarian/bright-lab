import React from 'react';
import cn from 'classnames';
import BrightLabSvgr from '../svgr/BrightLabSvgr';

const footer = (props) => {
  return (
    <div className={cn('bg-blue')}>
      <div className={cn('p-12')}>
        <div className={cn('grid grid-cols-4 gap-12')}>
          <div className={cn('col-span-1 pt-2')}>
            <BrightLabSvgr />
            <div className={cn('pt-2')}>
              <span className={cn('text-white')}>facebook</span>
              <span className={cn('text-white pl-2')}>insta</span>
              <span className={cn('text-white pl-2')}>linkedin</span>
            </div>
            <div className={cn('text-white pt-2 font-codec-pro-regular')}>
              {props.copyright}
            </div>
          </div>
          <div className={cn('col-span-1')}>
            <div className={cn('text-white font-hagrid-text')}>
              {props.email}{' '}
            </div>
          </div>
          <div className={cn('col-span-1')}>
            <div className={cn('text-white font-hagrid-text')}>
              {props.visit}{' '}
            </div>
            <div className={cn('text-white pt-4 font-codec-pro-regular')}>
              {props.description}{' '}
            </div>
            <div className={cn('text-white pt-4 font-codec-pro-regular')}>
              {props.description2}{' '}
            </div>
          </div>
          <div className={cn('col-span-1')}>
            <div className={cn('text-white font-hagrid-text')}>
              {props.call}{' '}
            </div>
            <div className={cn('text-white pt-4 font-codec-pro-regular')}>
              {props.phoneNumber}{' '}
            </div>
            <div className={cn('text-white font-codec-pro-regular')}>
              {props.phoneNumber2}{' '}
            </div>
            <div className={cn('text-white pt-4 font-codec-pro-regular')}>
              {props.phoneNumber3}{' '}
            </div>
            <div className={cn('text-white font-codec-pro-regular')}>
              {props.phoneNumber4}{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
