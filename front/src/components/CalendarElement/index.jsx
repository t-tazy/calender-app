import {
  isSameMonth,
  isSameDay,
  isFirstDay,
  getMonth,
} from '../../services/calendar';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import './style.css';

export const CalendarElement = ({ day, month }) => {
  const today = dayjs(); // 現在のdayjsインスタンス生成

  const format = isFirstDay(day) ? 'M月D日' : 'D';

  // 当月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);

  // 当日か判定
  const isToday = isSameDay(day, today);

  return (
    <div className="element">
      <Typography
        className="date"
        color={isCurrentMonth ? 'textPrimary' : 'textSecondary'}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? 'today' : ''}>{day.format(format)}</span>
      </Typography>
    </div>
  );
};
