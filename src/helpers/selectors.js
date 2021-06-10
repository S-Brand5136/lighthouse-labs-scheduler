const getAppointmentsForDay = (state, day) => {
  const { days, appointments } = state;
  // Filter out day that we need, map the appointments to a new array, flatten it,
  // map all the appointments with matching ids
  // or return an empty array if no day is found
  let appointmentIds = [];

  for (const item of days) {
    if (item.name === day) {
      appointmentIds = item.appointments;
      break;
    }
  }

  return appointmentIds.map((id) => appointments[id]);
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

const getInterviewersForDay = ({ days, interviewers }, day) => {
  // Filter out day that we need, map the appointments to a new array, flatten it,
  // map all the appointments with matching ids
  // or return an empty array if no day is found
  let interviewersId = [];

  for (const item of days) {
    if (item.name === day) {
      interviewersId = item.interviewers;
    }
  }

  return interviewersId.map((id) => interviewers[id]);
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
