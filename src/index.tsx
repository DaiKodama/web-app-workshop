import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Utils from '@date-io/dayjs';
import 'dayjs/locale/ja';
import dayjs, { Dayjs } from 'dayjs';
import { Routing } from './components/Routing'
import superagent from 'superagent';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA2C_3mP53Iu5lLr1I0wU1lFM-PrwinEpA",
  authDomain: "facility-reservations-73e6b.firebaseapp.com",
  projectId: "facility-reservations-73e6b",
  storageBucket: "facility-reservations-73e6b.appspot.com",
  messagingSenderId: "46662637419",
  appId: "1:46662637419:web:f303be13d3e7e6937c5e2e"
};
firebase.initalizeApp(firebaseConfig);

dayjs.locale('ja');

class ExtendedUtils extends Utils {
  getCalendarHeaderText(date: Dayjs) {
    return date.format('YYYY年 MMM');
  }

  getDateTimePickerHeaderText(date: Dayjs) {
    return date.format('M/D');
  }
}

superagent.parse['application/json'] = (text: string) => {
  const obj = JSON.parse(text, (key, value) => {
    if (typeof value?._seconds === 'number') {
      return dayjs.unix(value._seconds);
    }
    if (value?._path?.segments?.[1]) {
      return value._path.segments[1];
    }
    return value;
  });
  return obj;
};

ReactDom.render(
  <MuiPickersUtilsProvider utils={ExtendedUtils} locale="ja">
    <BrowserRouter>
      <Routing />
    </BrowserRouter>  
  </MuiPickersUtilsProvider>,
  document.getElementById('container'),
);
