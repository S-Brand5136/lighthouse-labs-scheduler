import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DayList from './DayList';
import Appointment from 'components/Appointment';

import 'components/Application.scss';

export default function Application() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
  });
  const setDay = (day) => setState({ ...state, day });
  const setDays = (days) => setState((prev) => ({ ...prev, days }));

  // Get all of the days from api, only once on initial load
  useEffect(() => {
    axios
      .get('api/days')
      .then((res) => {
        setDays(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <DayList days={state.days} day={state.day} setDay={setDay} />
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
