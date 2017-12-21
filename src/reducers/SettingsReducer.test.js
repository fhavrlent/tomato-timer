import expect from 'unexpected';
import settingsReducer from './SettingsReducer';
import { setTime } from '../dispatchers/SettingActions';

describe('Settings Reducer', () => {
  it('sets pomodoro time to 20 minutes', () => {
    const stateBefore = {
      pomodoro: 5000
    };
    const action = setTime({ value: 20, name: 'pomodoro' });
    const stateAfter = {
      pomodoro: 1200000
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });

  it('sets small break to 6 minutes', () => {
    const stateBefore = {
      smallBreak: 5000
    };
    const action = setTime({ value: 6, name: 'smallBreak' });
    const stateAfter = {
      smallBreak: 360000
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });

  it('sets long break to 15 minutes', () => {
    const stateBefore = {
      longBreak: 5000
    };
    const action = setTime({ value: 15, name: 'longBreak' });
    const stateAfter = {
      longBreak: 900000
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });
});
