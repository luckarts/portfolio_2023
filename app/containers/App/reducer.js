//reducer
/*
 *
 * AuthProvider reducer
 *
 */
import produce, { setAutoFreeze } from 'immer';

export const initialState = {
  isLoading: false,
  otpVerified: true,
  otp: '',
  otpError: false,
  isLogged: null,
  errors: [],
  user: {}
};

setAutoFreeze(false);
/* eslint-disable */
const appPageReducer = produce((draft, action) => {}, initialState);

export default appPageReducer;
