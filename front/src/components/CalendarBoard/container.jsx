import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addScheduleOpenDialog } from '../../redux/addSchedule/actions';
import { createCalendar } from '../../services/calendar';

import { CalendarBoard } from './presentation';

export const ContainerCalendarBoard = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  return (
    <CalendarBoard
      calendar={createCalendar(calendar)}
      month={calendar}
      openAddScheduleDialog={() => dispatch(addScheduleOpenDialog())}
    />
  );
};
