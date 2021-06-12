import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Sets the day to the day selected on the sideBar
  const setDay = (day) => setState({ ...state, day });

  // Get all of the days from api, only once on initial load
  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const spotsRemaining = (dayName, days, appointments) => {
    const daysCopy = days.map((day) => ({ ...day }));

    for (const day of daysCopy) {
      if (day.name === dayName) {
        day.spots = day.appointments.filter(
          (item) => !appointments[item].interview
        ).length;
      }
    }

    return daysCopy;
  };

  // Creates, and updates appointments in state object
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      return setState({
        ...state,
        appointments,
        days: spotsRemaining(state.day, state.days, appointments),
      });
    });
  };

  // Sets interview to null, and updates appointments in state Object
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      return setState({
        ...state,
        appointments,
        days: spotsRemaining(state.day, state.days, appointments),
      });
    });
  };

  return { state, cancelInterview, bookInterview, setDay };
};

export default useApplicationData;
