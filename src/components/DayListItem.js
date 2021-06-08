import React from 'react';
import classNames from 'classnames';

import 'components/DayListItem.scss';

const DayListItem = (props) => {
  const liClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  // Formats message for num of appointment spots left in a day
  const formatSpots = () => {
    if (props.spots <= 0) {
      return <h3 className='text--light'>no spots remaining</h3>;
    }
    if (props.spots === 1) {
      return <h3 className='text--light'>{props.spots} spot remaining</h3>;
    }
    return <h3 className='text--light'>{props.spots} spots remaining</h3>;
  };

  return (
    <li className={liClass} onClick={() => props.setDay(props.name)}>
      <h2 className='text--regular'>{props.name}</h2>
      {formatSpots()}
    </li>
  );
};

export default DayListItem;
