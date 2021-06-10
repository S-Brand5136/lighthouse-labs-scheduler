const getAppointmentsForDay = (state, day) => {
  const { days, appointments } = state;
  // Filter out day that we need, map the appointments to a new array, flatten it,
  // map all the appointments with matching ids
  // or return an empty array if no day is found

  return days
    .filter((item) => item.name === day)
    .map((item) => item.appointments)
    .flat()
    .map((item) => appointments[item]);
};

const getInterview = (state, interview) => {
  // Destructure values, if student is falsey set to empty object
  // and return null, else return object
  const { interviewers } = state;
  const { student, interviewer } = interview || {};

  return !student
    ? null
    : {
        student,
        interviewer: interviewers[interviewer],
      };
};

export { getAppointmentsForDay, getInterview };
