import React from 'react';
import cn from 'classnames';

const Button = (props) => {
  return (
    <div className={cn(props.className)}>
      <div>{props.name}</div>
    </div>
  );
};

export default Button;
