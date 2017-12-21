import { handleActions } from 'redux-actions';
import moment from 'moment';
import * as actions from '../dispatchers/TimerActions';

const initState = {
  isCounting: false,
  timeLeft: parseInt(localStorage.getItem('pomodoroTime'), 0) || 1500000,
  counterID: null
};

const timerReducer = handleActions(
  {
    [actions.startCountDown]: (state, action) => ({
      ...state,
      isCounting: true,
      timeLeft: parseInt(action.payload.value, 0),
      counterID: action.payload.counterID
    }),
    [actions.countDown]: (state, action) => ({
      ...state,
      timeLeft: moment(state.timeLeft)
        .subtract(1, 's')
        .valueOf()
    }),
    [actions.stopCountDown]: (state, action) => ({
      ...state,
      isCounting: false
    })
  },
  initState
);

export default timerReducer;
