import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Reservation } from './Reservation';
import { Facility } from './Facility';
import { ReservationList } from './ReservationList';
import { FacilityReservationList } from './FacilityReservationList';

export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path="/facilityreservation/" component={FacilityReservationList} />
      <Route path="/reservation/:id?" component={Reservation} />
      <Route path="/facility/:id?" component={Facility} />
      <Route path="/" exact component={ReservationList} />
    </Switch>
  );
};
