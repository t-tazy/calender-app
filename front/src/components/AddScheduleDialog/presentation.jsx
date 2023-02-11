import {
  AccessTime,
  LocationOnOutlined,
  NotesOutlined,
} from '@mui/icons-material';
import { Button, Dialog, DialogContent, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { DatePicker } from '@mui/x-date-pickers';

export const AddScheduleDialog = ({ schedule, closeDialog, setSchedule }) => {
  console.log(schedule, 'schedule');
  return (
    <Dialog open={schedule.isDialogOpen} onClose={closeDialog}>
      <DialogContent>
        <TextField
          autoFocus
          placeholder="タイトルと日時を追加"
          fullWidth
          variant="standard"
          sx={{ marginBottom: '30px' }}
          value={schedule.form.title}
          onChange={(e) => setSchedule({ title: e.target.value })}
        />
        <Grid2 container spacing={1}>
          <Grid2 xs={2}>
            <AccessTime />
          </Grid2>
          <Grid2 xs={10}>
            <DatePicker
              value={schedule.form.date.format("YYYYMMDD")}
              onChange={(params) => {
              {/* paramsはdayjsインスタンス */}
                setSchedule({ date: params });
              }}
              renderInput={(params) => (
                <TextField variant="standard" fullWidth {...params} />
              )}
            />
          </Grid2>
          <Grid2 xs={2}>
            <LocationOnOutlined />
          </Grid2>
          <Grid2 xs={10}>
            <TextField
              fullWidth
              placeholder="場所を追加"
              variant="standard"
              value={schedule.form.location}
              onChange={(e) => setSchedule({ location: e.target.value })}
            />
          </Grid2>
          <Grid2 xs={2}>
            <NotesOutlined />
          </Grid2>
          <Grid2 xs={10}>
            <TextField
              fullWidth
              placeholder="説明を追加"
              variant="standard"
              value={schedule.form.description}
              onChange={(e) => setSchedule({ description: e.target.value })}
            />
          </Grid2>
        </Grid2>
        <Grid2 display="flex" justifyContent="flex-end">
          <Button color="primary" variant="outlined" sx={{ marginTop: '20px' }}>
            保存
          </Button>
        </Grid2>
      </DialogContent>
    </Dialog>
  );
};
