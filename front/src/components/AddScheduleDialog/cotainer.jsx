import { useDispatch, useSelector } from 'react-redux';
import { addScheduleCloseDialog } from '../../redux/addSchedule/actions';
import { AddScheduleDialog } from './presentation';

export const ContainerAddScheduleDialog = () => {
  const schedule = useSelector((state) => state.addSchedule);
  const dispatch = useDispatch();

  return (
    <AddScheduleDialog
      schedule={schedule}
      closeDialog={() => dispatch(addScheduleCloseDialog())}
    />
  );
};
