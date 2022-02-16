import React from 'react';
import ReactDom from 'react-dom';
import { Reservation } from './components/Reservation';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Utils from '@date-io/dayjs';
import 'dayjs/locale/ja';
import { Dayjs } from 'dayjs';

class ExtendedUtils extends Utils {
  getCalendarHeaderText(date: Dayjs) {
    return date.format('YYYY年 MMM');
  }

  getDateTimePickerHeaderText(date: Dayjs) {
    return date.format('M/D');
  }
}

ReactDom.render(
  <MuiPickersUtilsProvider utils={ExtendedUtils} locale="ja">
    <Reservation />
  </MuiPickersUtilsProvider>,
  document.getElementById('container'),
);
