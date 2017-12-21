import { handleActions } from 'redux-actions';
import * as actions from '../dispatchers/SettingActions';

const initState = {
  pomodoro: parseInt(localStorage.getItem('pomodoroTime'), 0) || 1500000,
  smallBreak: parseInt(localStorage.getItem('smallBreakTime'), 0) || 300000,
  longBreak: parseInt(localStorage.getItem('longBreakTime'), 0) || 600000
};

const settingsReducer = handleActions(
  {
    [actions.setTime]: (state, action) => ({
      ...state,
      [action.payload.name]: action.payload.value * 60000
    })
  },
  initState
);

export default settingsReducer;
