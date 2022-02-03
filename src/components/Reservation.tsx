import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import dayjs, { Dayjs } from "dayjs";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IReservation } from "../models/IReservation";
import { DateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const initReservation: IReservation = {
  id: '001',
  facilityId: '001',
  subject: '目的０１',
  description: '説明０１',
  startDate: dayjs(),
  endDate: dayjs(1, 'hour'),
  system: {
    createDate: new Date(),
    createUser: {
      displayName: 'ebihara kenji',
      email: '',
      face: 'https://bit.ly/3pM3urc',
    },
    lastUpdateUser: {
      displayName: 'ebihara kenji',
      email: '',
      face: 'https://bit.ly/3pM3urc',
    },
    lastUpdate: new Date(),
  },
};

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiTestFileld-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
  },
  rightActions: {
    textAlign: 'right',
  },
  cancelButton: {
    color: theme.palette.error.main,
  }
}));

export const Reservation: React.FC = () => {
  const style = useStyle();
  const { system } = initReservation;
  const  { register, errors, control } = useForm< IReservation>({
    defaultValues: initReservation,
    mode: 'onBlur',
  });

  return (
    <Container maxWidth="sm" className={style.root}>
      <Paper className={style.paper}>
      <div style={{ display: 'flex' }}>
          <Controller
            control={control}
            name="startDate"
            render={(data) => {
              return (
                <DateTimePicker
                  data-testid="start-date"
                  value={data.value}
                  onChange={data.onChange}
                  onBlur={data.onBlur}
                  label="開始日時"
                  format="YYYY/MM/DD HH:mm"
                  ampm={false}
                  minutesStep={15}
                />
              );
            }}
          />
          <p>～</p>
          <Controller
            control={control}
            name="endDate"
            render={(data) => {
              return (
                <DateTimePicker
                  data-testid="end-date"
                  value={data.value}
                  onChange={data.onChange}
                  onBlur={data.onBlur}
                  label="終了日時"
                  format="YYYY/MM/DD HH:mm"
                  ampm={false}
                  minutesStep={15}
                />
              );
            }}
          />
        </div>
        <Controller
          control={control}
          name="subject"
          rules={{ required: true }}
          as={<TextField label="目的" fullWidth error={!!errors.subject} helperText={errors.subject ? '必須です' : ''}
          />
        }
        />
        <Controller
          control={control}
          name="description"
          rules={{ required: true }}
          as={<TextField label="詳細" fullWidth multiline value=''
          />
        }
        />        <InputLabel shrink>登録者</InputLabel>
        <p>
          <Chip 
            label={system.createUser.displayName}
            avatar={<Avatar src={system.createUser.face } />}
          />
            {dayjs(system.createDate).format('YYYY-MM-DD HH:mm')}
        </p>
        <InputLabel shrink>更新者</InputLabel>
        <p>
          <Chip 
            label={system.createUser.displayName}
            avatar={<Avatar src={system.lastUpdateUser.face} />}
          />
            {dayjs(system.lastUpdate).format('YYYY-MM-DD HH:mm')}
        </p>
        <Grid container>
          <Grid  item xs={6}>
            <Button className={style.cancelButton} startIcon={<DeleteIcon />}>削除</Button>
          </Grid>
          <Grid item xs={6} className={style.rightActions}>
            <Button variant="contained" color="primary" startIcon={<DoneIcon />}>保存</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
};