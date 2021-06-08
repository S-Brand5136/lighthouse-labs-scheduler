import React from 'react';

import InterviewListItem from './InterviewListItem';
import 'components/InterviewerList.scss';

const InterviewerList = (props) => {
  // Creates an array of InterviewListItems to render
  const interviewerList = props.interviewers.map((item) => {
    return (
      <InterviewListItem
        key={item.id}
        setInterviewer={() => props.onChange(item.id)}
        selected={props.value === item.id}
        name={item.name}
        avatar={item.avatar}
      />
    );
  });

  return (
    <section className='interviewers'>
      <h4 className='interviewers__header text--light'>Interviewer</h4>
      <ul className='interviewers__list'>{interviewerList}</ul>
    </section>
  );
};

export default InterviewerList;
