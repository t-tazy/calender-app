import { combineReducers } from 'redux';
import { addScheduleReducer } from './addSchedule/reducer';
import { calendarReducer } from './calendar/reducer';

export const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer
});
