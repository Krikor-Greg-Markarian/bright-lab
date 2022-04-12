import React from 'react';
import cn from 'classnames';
const Answers = (props) => {
  return (
    <div className={cn('bg-blue')}>
      <div className={cn('p-8')}>
        <div className={cn('text-white font-hagrid-text text-60')}>
          {props.title}
        </div>
        <div className={cn('text-white w-3/12 font-codec-pro-regular text-25')}>
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Answers;
