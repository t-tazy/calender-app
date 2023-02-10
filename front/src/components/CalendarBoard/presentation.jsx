import { CalendarElement } from '../CalendarElement';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import './style.css';
import { Typography } from '@mui/material';

const days = ['日', '月', '火', '水', '木', '金', '土'];

export const CalendarBoard = ({ calendar, month }) => {
  console.log(calendar);
  return (
    <Grid2 container className="grid" columns={7} spacing={0}>
      {days.map((d) => {
        return (
          <Grid2 key={d} xs={1}>
            <Typography
              className="days"
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </Grid2>
        );
      })}
      {calendar.map((day) => {
        return (
          <Grid2 key={day.toISOString()} xs={1}>
            <CalendarElement day={day} month={month} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
