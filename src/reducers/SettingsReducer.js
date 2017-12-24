import { handleActions } from 'redux-actions';
import * as actions from '../dispatchers/SettingActions';

const initState = {
  pomodoro: 1500000,
  smallBreak: 300000,
  longBreak: 600000,
  darkMode: false
};

const settingsReducer = handleActions(
  {
    [actions.setTime]: (state, action) => {
      const value = action.payload.value * 60000;
      return {
        ...state,
        [action.payload.name]: value
      };
    },
    [actions.reset]: (state, action) => {
      return {
        pomodoro: 1500000,
        smallBreak: 300000,
        longBreak: 600000,
        darkMode: false
      };
    },
    [actions.toggleDarkMode]: (state, action) => {
      return {
        ...state,
        darkMode: action.payload
      };
    }
  },
  initState
);

export default settingsReducer;
