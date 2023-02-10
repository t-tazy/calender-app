import { IconButton, TextField, Toolbar, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import React, { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';

export const Navigation = ({ setPrevMonth, setNextMonth, setMonth, month }) => {
  console.log(month, 'monthの情報');
  return (
    <Toolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <Typography
        sx={{ margin: '0 30px 0 10px' }}
        color="textSecondary"
        variant="h5"
        component="h1"
      >
        カレンダー
      </Typography>
      <IconButton size="small" onClick={setPrevMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton
        size="small"
        onClick={setNextMonth}
        sx={{ marginRight: '30px' }}
      >
        <ArrowForwardIos />
      </IconButton>
      <DatePicker
        value={month}
        openTo="month"
        views={['year', 'month']}
        onChange={(params) => {
          console.log(params);
          setMonth(params);
        }}
        renderInput={(params) => {
          console.log(params);
          return <TextField {...params} />;
        }}
      />
    </Toolbar>
  );
};
