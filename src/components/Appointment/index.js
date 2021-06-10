import React from 'react';

import { useVisualMode } from '../hooks/useVisualMode';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';

import './styles.scss';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';

const Appointment = (props) => {
  return (
    <article className='appointment'>
      <Header time={props.time} />
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
