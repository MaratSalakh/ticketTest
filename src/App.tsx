import { data } from "./assets/data";
import "./index.css";
import { Card } from "./components/Card/Card";
import { FlightFilter } from "./components/FlightFilter/FlightFilter";
import styles from "./App.module.scss";
import { useState } from "react";

// type ticket = {
//   origin: string;
//   origin_name: string;
//   destination: string;
//   destination_name: string;
//   departure_date: string;
//   departure_time: string;
//   arrival_date: string;
//   arrival_time: string;
//   carrier: string;
//   stops: number;
//   price: number;
// };

export const App = () => {
  const [currency, setCurrency] = useState("rub");
  const [stops, setStops] = useState<string>("all");

  return (
    <div className={styles.mainBlock}>
      <FlightFilter
        currency={currency}
        setCurrency={setCurrency}
        stops={stops}
        setStops={setStops}
      />
      <div className={styles.cardsWrapper}>
        {data.tickets
          .filter((ticket) => {
            if (stops === "all") {
              return true;
            }

            return ticket.stops.toString() === stops;
          })
          .map((ticket, i) => (
            <Card key={i} ticketData={ticket} currency={currency} />
          ))}
      </div>
    </div>
  );
};
