import React, { useState } from "react";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Paper } from "@material-ui/core";
import Container from '@material-ui/core/Container/Container';
import { IFacility } from '../models/IFacility';

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

type Props = JSX.IntrinsicElements['div'] & {
  facility: IFacility;
};

export const ReservationFacilityList: React.FC<Props> = (props) => {
  const style = useStyle();
  const {
    facility,
  } = props;
  console.log(facility)

  return(
    <Container maxWidth="sm" className={style.root}>
      <Paper>
      <h1>設備予約</h1>
      </Paper>
    </Container>
  )
}