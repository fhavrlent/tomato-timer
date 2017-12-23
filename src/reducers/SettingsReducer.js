import { handleActions } from 'redux-actions';
import * as actions from '../dispatchers/SettingActions';

const initState = {
  pomodoro: parseInt(localStorage.getItem('pomodoroTime'), 0) || 1500000,
  smallBreak: parseInt(localStorage.getItem('smallBreakTime'), 0) || 300000,
  longBreak: parseInt(localStorage.getItem('longBreakTime'), 0) || 600000
};

const settingsReducer = handleActions(
  {
    [actions.setTime]: (state, action) => {
      const value = action.payload.value * 60000;
      localStorage.setItem(action.payload.name + 'Time', value);
      return {
        ...state,
        [action.payload.name]: value
      };
    },
    [actions.reset]: (state, action) => {
      localStorage.setItem('pomodoroTime', 1500000);
      localStorage.setItem('smallBreakTime', 300000);
      localStorage.setItem('longBreakTime', 600000);
      return {
        pomodoro: 1500000,
        smallBreak: 300000,
        longBreak: 600000
      };
    }
  },
  initState
);

export default settingsReducer;
