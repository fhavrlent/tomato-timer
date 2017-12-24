import { handleActions } from 'redux-actions';
import moment from 'moment';
import * as actions from '../dispatchers/TimerActions';

const initState = {
  timeLeft: 1500000,
  counterID: null,
  type: null
};

const timerReducer = handleActions(
  {
    [actions.startCountDown]: (state, action) => ({
      ...state,
      timeLeft: parseInt(action.payload.value, 0),
      counterID: action.payload.counterID,
      type: action.payload.type
    }),
    [actions.countDown]: (state, action) => ({
      ...state,
      timeLeft: moment(state.timeLeft)
        .subtract(1, 's')
        .valueOf()
    }),
    [actions.stopCountDown]: (state, action) => ({
      ...state,
      counterID: null
    }),
    [actions.changeTimeLeft]: (state, action) => ({
      ...state,
      timeLeft: action.payload.value
    })
  },
  initState
);

export default timerReducer;
