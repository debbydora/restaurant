import { CustomerCard } from "../../components/CustomerCard";
import { ReservationCard } from "../../components/ReservationCard";
import HomeProvider from "./HomeProvider";

const Home = (props: any) => {
  const {
    reservations,
    customers,
    reservationNameInput,
    handleReservations,
    handleReservationChange,
  } = HomeProvider(props);
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={handleReservationChange}
            />
            <button onClick={handleReservations}>Book your reservation</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
