import expect from 'unexpected';
import timerReducer from './TimerReducer';
import {
  startCountDown,
  countDown,
  stopCountDown
} from '../dispatchers/TimerActions';

describe('Timer Reducer', () => {
  it('starts pomodoro session', () => {
    const stateBefore = {
      isCounting: false,
      timeLeft: 30000
    };
    const action = startCountDown({ value: 25 });
    const stateAfter = {
      isCounting: true,
      timeLeft: 1500000
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
      timeLeft: 23262
    };
    const action = stopCountDown();
    const stateAfter = {
      timeLeft: 23262,
      isCounting: false
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
});
