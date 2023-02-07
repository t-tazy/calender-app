import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./actions";

const day = dayjs();

// 初期値は今月
const initState = {
  year: day.year(),
  month: day.month() + 1 // 0 (Jan) to 11 (Dec)
}

export const calendarReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};
