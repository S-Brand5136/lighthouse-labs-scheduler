const getAppointmentsForDay = ({ days, appointments }, day) => {
  // Search for appointments that we need
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
  // Check if interview is falsey, return null if so.
  // Destructure values return new interview object
  if (!interview) {
    return null;
  }
  const { interviewers } = state;
  const { student, interviewer } = interview;

  return {
    student,
    interviewer: interviewers[interviewer],
  };
};

const getInterviewersForDay = ({ days, interviewers }, day) => {
  // Search for interviewers that we need
  // map all the interviewers with matching ids
  // or return an empty array if no day is found
  let interviewersId = [];

  for (const item of days) {
    if (item.name === day) {
      interviewersId = item.interviewers;
      break;
    }
  }

  return interviewersId.map((id) => interviewers[id]);
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
