import React from 'react';

import DayListItem from './DayListItem';

const DayList = (props) => {
  // Create an array of DayListItems to render for each day passed in
  const dayListItem = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{dayListItem}</ul>;
};

export default DayList;
