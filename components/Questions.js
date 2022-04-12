import React from 'react';
import cn from 'classnames';
import PlusSvgr from '../svgr/PlusSvgr';

const Questions = (props) => {
  return (
    <div>
      <div className={cn('uppercase pl-12 border-b border-black ')}>
        {props.title}
      </div>
      <div className={cn('grid grid-cols-5')}>
        <div className={cn('col-span-3')}>
          <span className={cn('pl-12')}>{props.number}</span> {props.question}
        </div>
        <div className={cn('col-span-1')}>
          <PlusSvgr />
        </div>
      </div>
    </div>
  );
};

export default Questions;
