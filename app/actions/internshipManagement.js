import {
  GET_INTERNSHIPS_FOR_STUDENT_FAILURE,
  GET_INTERNSHIPS_FOR_STUDENT_SUCCESS,
  GET_INTERNSHIPS_FOR_STUDENT_REQUEST,
  CONFIRM_EXAM_ATTENDANCE_REQUEST,
  CONFIRM_EXAM_ATTENDANCE_SUCCESS,
  CONFIRM_EXAM_ATTENDANCE_FAILURE,
  CONFIRM_INTERNSHIP_PARTICIPATION_REQUEST,
  CONFIRM_INTERNSHIP_PARTICIPATION_SUCCESS,
  CONFIRM_INTERNSHIP_PARTICIPATION_FAILURE,
  REFUSE_INTERNSHIP_REQUEST,
  REFUSE_INTERNSHIP_SUCCESS,
  REFUSE_INTERNSHIP_FAILURE,
} from 'constants/internshipManagement';

export const getInternshipsForStudent = () => ({
  type: GET_INTERNSHIPS_FOR_STUDENT_REQUEST,
});

export const getInternshipsForStudentSuccess = response => ({
  type: GET_INTERNSHIPS_FOR_STUDENT_SUCCESS,
  response,
});

export const getInternshipsForStudentFailure = message => ({
  type: GET_INTERNSHIPS_FOR_STUDENT_FAILURE,
  message,
});

export const confirmExamAttendance = (values, fun) => ({
  type: CONFIRM_EXAM_ATTENDANCE_REQUEST,
  values, fun,
});

export const confirmExamAttendanceSuccess = response => ({
  type: CONFIRM_EXAM_ATTENDANCE_SUCCESS,
  response,
});

export const confirmExamAttendanceFailure = message => ({
  type: CONFIRM_EXAM_ATTENDANCE_FAILURE,
  message,
});

export const confirmInternshipParticipation = (values, fun) => ({
  type: CONFIRM_INTERNSHIP_PARTICIPATION_REQUEST,
  values, fun,
});

export const confirmInternshipParticipationSuccess = response => ({
  type: CONFIRM_INTERNSHIP_PARTICIPATION_SUCCESS,
  response,
});

export const confirmInternshipParticipationFailure = message => ({
  type: CONFIRM_INTERNSHIP_PARTICIPATION_FAILURE,
  message,
});

export const refuseInternship = (values, fun) => ({
  type: REFUSE_INTERNSHIP_REQUEST,
  values, fun,
});

export const refuseInternshipSuccess = response => ({
  type: REFUSE_INTERNSHIP_SUCCESS,
  response,
});

export const refuseInternshipFailure = message => ({
  type: REFUSE_INTERNSHIP_FAILURE,
  message,
});
