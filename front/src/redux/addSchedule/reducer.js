import {
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_SET_VALUE,
} from './actions';

const initState = {
  form: {
    title: '',
    description: '',
    date: null,
    location: '',
  },
  isDialogOpen: false, // dialogが開いているかどうか
};

export const addScheduleReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      return {
        ...state,
        form: { ...state.form, ...payload },
      };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG: // dialogを閉じるとフォームもクリアされる
      return initState;
    default:
      return state;
  }
};
