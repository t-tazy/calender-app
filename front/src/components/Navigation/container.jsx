import { useDispatch, useSelector } from 'react-redux';
import { calendarSetMonth } from '../../redux/calendar/actions';
import {
  formatMonth,
  getMonth,
  getNextMonth,
  getPrevMonth,
} from '../../services/calendar';
import { Navigation } from './presentation';

export const ContainerNavigation = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const nextMonth = getNextMonth(calendar);
  const prevMonth = getPrevMonth(calendar);

  return (
    <Navigation
      setNextMonth={() => dispatch(calendarSetMonth(nextMonth))}
      setPrevMonth={() => dispatch(calendarSetMonth(prevMonth))}
      setMonth={(dayjs) => {
        dispatch(calendarSetMonth(formatMonth(dayjs)));
      }}
      month={getMonth(calendar)}
    />
  );
};
