import React from 'react';
import classNames from 'classnames';

import 'components/InterviewListItem.scss';

const InterviewListItem = (props) => {
  const liClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });

  return (
    <li className={liClass} onClick={props.setInterviewer}>
      <img
        className='interviewers__item-image'
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewListItem;
