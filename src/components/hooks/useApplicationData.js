import { useEffect, useReducer } from 'react';
import axios from 'axios';

const SET_DAY = 'SET_DAY';
const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
const SET_INTERVIEW = 'SET_INTERVIEW';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DAY: {
      return { ...state, day: action.value.day };
    }
    case SET_APPLICATION_DATA: {
      return {
        ...state,
        days: action.value.days,
        appointments: action.value.appointments,
        interviewers: action.value.interviewers,
      };
    }
    case SET_INTERVIEW: {
      return {
        ...state,
        appointments: action.value.appointments,
        days: action.value.days,
      };
    }
    default: {
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Sets the day to the day selected on the sideBar
  const setDay = (day) => dispatch({ type: SET_DAY, value: { day } });

  // Get all of the days from api, only once on initial load
  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers'),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        },
      });
    });
  }, []);

  // Pair programmed with Brandon Copeland
  // Calculates the remaining appointment spots in the chosen day
  const spotsRemaining = (dayName, days, appointments) => {
    const daysCopy = days.map((day) => ({ ...day }));

    for (const day of daysCopy) {
      if (day.name === dayName) {
        day.spots = day.appointments.filter(
          (item) => !appointments[item].interview
        ).length;
        break;
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
      return dispatch({
        type: SET_INTERVIEW,
        value: {
          appointments,
          days: spotsRemaining(state.day, state.days, appointments),
        },
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
      return dispatch({
        type: SET_INTERVIEW,
        value: {
          appointments,
          days: spotsRemaining(state.day, state.days, appointments),
        },
      });
    });
  };

  return { state, cancelInterview, bookInterview, setDay };
};

export default useApplicationData;
