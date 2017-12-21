import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import timerReducer from './TimerReducer';
import settingsReducer from './SettingsReducer';

export default combineReducers({
  routing: routerReducer,
  timer: timerReducer,
  settings: settingsReducer
});
