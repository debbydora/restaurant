import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/ReservationSlice";
import { addCustomer } from "../features/CustomerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}
export const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  const handleResevationRemoval = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name,
        food: [],
      })
    );
  };

  return (
    <div
      onClick={handleResevationRemoval}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};
