import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/CustomerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

export const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = useState("");

  const handleFoodInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerFoodInput(e.target.value);
  };
  const handleAddFoodInput = () => {
    if (!customerFoodInput) return;
    dispatch(
      addFoodToCustomer({
        id,
        food: customerFoodInput,
      })
    );
    setCustomerFoodInput("");
  };
  return (
    <div className="customer-food-card-container">
      <p className="customer-name">{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p key={id}>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={handleFoodInput} />
          <button onClick={handleAddFoodInput}>Add food</button>
        </div>
      </div>
    </div>
  );
};
