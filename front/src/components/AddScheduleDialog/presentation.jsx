import { Dialog, DialogContent } from '@mui/material';

export const AddScheduleDialog = ({ schedule, closeDialog }) => {
  console.log(schedule, 'schedule');
  return (
    <Dialog open={schedule.isDialogOpen} onClose={closeDialog}>
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};
