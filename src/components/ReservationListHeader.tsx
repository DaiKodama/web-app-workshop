import React, { useCallback, useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { DoubleArrow } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import { currentDateContext } from "./ReservationList";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  startIcon: {
    transform: "rotate(180deg)",
  },
  date: {
    "& input": { fontSize: "2rem", margin: 0, textAlign: "center" },
  },
  weekday: {
    margin: 0,
    textAlign: "center",
  },
  actions: {
    textAlign: "right",
    position: "relative",
    top: "-2em",
    marginBottom: "-1.5em",
  },
  reserve: {
    marginRight:"20px",
  }
}));

export const ReservationListHeader: React.FC = () => {
  const styles = useStyles();
  const {currentDate, dispatch} = useContext(currentDateContext);
  const changeDate = useCallback(
    (date: MaterialUiPickersDate) => {
      if (!date) return;
      dispatch({ payload: date, type: 'ChangeDate' });
    },
    [dispatch],
  );
    return(
    <div>
      <div className={styles.header}>
        <div>
          <Button startIcon={<DoubleArrow className={styles.startIcon}/>}>
            1日前
          </Button>
        </div>
        <div>
          <DatePicker
            value={currentDate}
            className={styles.date}
            format="YYYY-MM-DD"
            onChange={changeDate}

          />
          <p className={styles.weekday}>{currentDate.format('dddd')}</p>
        </div>
        <div>
          <Button endIcon={<DoubleArrow />}>
            1日後
          </Button>
        </div>
      </div>
      <div className={styles.actions}>
        <Button className={styles.reserve} variant="contained" color="primary" component={ Link } to="/reservationfacilityList/">
          予約一覧
        </Button>
        <Button variant="contained" color="primary" component={ Link } to="/facility/">
          設備の登録
        </Button>
      </div>
    </div>
  )
};