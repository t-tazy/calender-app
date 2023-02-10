import dayjs from 'dayjs';

// 0〜34の連番配列を作成
export const createCalendar = (calendarState) => {
  // 今月の最初の日を取得
  const firstDay = getMonth(calendarState);
  // 最初の日の曜日を取得
  // 0 (Sunday) to 6 (Saturday)
  const firstDayIndex = firstDay.day();
  return new Array(35).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    // firstDayにdiffを足す
    // diffがマイナスだった場合、先月を表すことになる
    const day = firstDay.add(diffFromFirstDay, 'day');
    return day;
  });
};

export const getNextMonth = (calendarState) => {
  const day = getMonth(calendarState).add(1, 'month');
  return formatMonth(day);
};

export const getPrevMonth = (calendarState) => {
  const day = getMonth(calendarState).add(-1, 'month');
  return formatMonth(day);
};

// dayjsインスタンスを受け取り、calendarStateのフォーマットの
// オブジェクトを返す
export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

// calendar stateのフォーマットのデータを受け取り
// その月のdayjsインスタンスを返す
export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

// 当日かどうか判定
// 文字列に変換して比較する
export const isSameDay = (d1, d2) => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

// 当月がどうか判定
// 0 (Jan) to 11 (Dec)
export const isSameMonth = (m1, m2) => {
  const format = 'YYYYMM';
  return m1.format(format) === m2.format(format);
};

// 月初めか判定
export const isFirstDay = (day) => day.date() === 1;
