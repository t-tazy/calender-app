import { combineReducers } from 'redux';
import { calendarReducer } from './calendar/reducer';

export const rootReducer = combineReducers({ calendar: calendarReducer });
