import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, Label, Button } from 'reactstrap';
import moment from 'moment';

const Settings = ({
  setTime,
  shortBreak,
  longBreak,
  pomodoro,
  optionValues,
  reset
}) => {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <FormGroup>
              <Label for="pomodoro">Pomodoro</Label>
              <Input
                type="select"
                name="pomodoro"
                id="pomodoro"
                value={moment(pomodoro).minutes()}
                onChange={setTime}
              >
                {optionValues.map(e => <option key={e}>{e}</option>)}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="smallBreak">Short Break</Label>
              <Input
                type="select"
                name="smallBreak"
                id="smallBreak"
                value={moment(shortBreak).minutes()}
                onChange={setTime}
              >
                {optionValues.map(e => <option key={e}>{e}</option>)}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="longBreak">Long Break</Label>
              <Input
                type="select"
                name="longBreak"
                id="longBreak"
                value={moment(longBreak).minutes()}
                onChange={setTime}
              >
                {optionValues.map(e => <option key={e}>{e}</option>)}
              </Input>
            </FormGroup>
            <Button color="primary" onClick={reset} size={'lg'}>
              Reset values
            </Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes = {
  setTime: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  optionValues: PropTypes.array.isRequired
};

export default Settings;
