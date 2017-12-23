import expect from 'unexpected';
import timerReducer from './TimerReducer';
import {
  startCountDown,
  countDown,
  stopCountDown,
  changeTimeLeft
} from '../dispatchers/TimerActions';

describe('Timer Reducer', () => {
  it('starts pomodoro session', () => {
    const stateBefore = {
      isCounting: false,
      timeLeft: 30000,
      counterID: null,
      type: null
    };
    const action = startCountDown({
      value: 1500000,
      counterID: 20,
      type: 'pomodoro'
    });
    const stateAfter = {
      isCounting: true,
      timeLeft: 1500000,
      counterID: 20,
      type: 'pomodoro'
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('counts down', () => {
    const stateBefore = {
      isCounting: true,
      timeLeft: 23262
    };
    const action = countDown();
    const stateAfter = {
      isCounting: true,
      timeLeft: 22262
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('stops countdown', () => {
    const stateBefore = {
      isCounting: true,
      timeLeft: 23262,
      counterID: 20
    };
    const action = stopCountDown();
    const stateAfter = {
      timeLeft: 23262,
      isCounting: false,
      counterID: null
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('change time left', () => {
    const stateBefore = {
      type: null,
      timeLeft: 1500000
    };
    const action = changeTimeLeft({ value: 10, name: 'pomodoro' });
    const stateAfter = {
      timeLeft: 600000,
      type: null
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('will not change time left', () => {
    const stateBefore = {
      type: 'long break',
      timeLeft: 600000
    };
    const action = changeTimeLeft({ value: 10, name: 'pomodoro' });
    const stateAfter = {
      timeLeft: 600000,
      type: 'long break'
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
});
