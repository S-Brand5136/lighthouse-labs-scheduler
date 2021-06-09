import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DayList from './DayList';
import Appointment from 'components/Appointment';

import 'components/Application.scss';

const appointments = [
  {
    id: 1,
    time: '12pm',
  },
  {
    id: 2,
    time: '1pm',
    interview: {
      student: 'Lydia Miller-Jones',
      interviewer: {
        id: 1,
        name: 'Sylvia Palmer',
        avatar: 'https://i.imgur.com/LpaY82x.png',
      },
    },
  },
  {
    id: 3,
    time: '2pm',
  },
  {
    id: 4,
    time: '3pm',
    interview: {
      student: 'Cad-Bane',
      interviewer: {
        id: 1,
        name: 'Sven Jones',
        avatar: 'https://i.imgur.com/twYrpay.jpg',
      },
    },
  },
  {
    id: 5,
    time: '4pm',
    interview: {
      student: 'John Doe',
      interviewer: {
        id: 1,
        name: 'Sven Jones',
        avatar: 'https://i.imgur.com/twYrpay.jpg',
      },
    },
  },
  {
    id: 6,
    time: '5pm',
  },
  {
    id: 7,
    time: '6pm',
  },
];

export default function Application() {
  const [day, setDay] = useState('Monday');

  const appointmentsList = appointments.map((appointment) => {
    return <Appointment key={appointment.id} {...appointment} />;
  });

  return (
    <main className='layout'>
      <section className='sidebar'>
        <img
          className='sidebar--centered'
          src='images/logo.png'
          alt='Interview Scheduler'
        />
        <hr className='sidebar__separator sidebar--centered' />
        <nav className='sidebar__menu'>
          <DayList days={days} day={day} setDay={setDay} />
        </nav>
        <img
          className='sidebar__lhl sidebar--centered'
          src='images/lhl.png'
          alt='Lighthouse Labs'
        />{' '}
      </section>
      <section className='schedule'>{appointmentsList}</section>
    </main>
  );
}
