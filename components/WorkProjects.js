import React from 'react';
import cn from 'classnames';
const WorkProjects = (props) => {
  return (
    <div>
      <div
        className={cn('p-12')}
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2022/04/04/18/17/sunset-7112018__340.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div>{props.title}</div>
        <div className={cn('uppercase')}>{props.description}</div>
        <div className={cn('pt-4')}>
          <a className={cn('uppercase')} href="">
            {props.learnMoreUrl}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkProjects;
