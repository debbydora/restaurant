import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { addReservation } from "../../features/ReservationSlice";

type HomeProviderType = {
  reservations: string[];
  customers: Array<{ [key: string]: any }>;
  reservationNameInput: string;
  handleReservationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReservations: () => void;
};

const HomeProvider = (_props: HomeProviderType) => {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);
  //this dispatches the action we want
  const dispatch = useDispatch();
  const handleReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservationNameInput(e.target.value);
  };
  return {
    reservations,
    customers,
    reservationNameInput,
    handleReservations,
    handleReservationChange,
  };
};

export default HomeProvider;
