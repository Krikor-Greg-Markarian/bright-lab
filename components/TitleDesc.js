import React from 'react';
import cn from 'classnames';
const TitleDesc = (props) => {
  return (
    <div className={cn('w-4/12')}>
      <div className={cn('font-hagrid-text text-60')}>{props.title}</div>
      <div className={cn('font-codec-pro-regular text-25')}>
        {props.description}
      </div>
    </div>
  );
};

export default TitleDesc;
