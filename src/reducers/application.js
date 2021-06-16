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

export { reducer as default, SET_DAY, SET_INTERVIEW, SET_APPLICATION_DATA };
