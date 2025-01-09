import { data } from "./assets/data";
import "./index.css";
import { Card } from "./components/Card/Card";
import { FlightFilter } from "./components/FlightFilter/FlightFilter";
import styles from "./App.module.scss";
import { useState } from "react";

export const App = () => {
  const [currency, setCurrency] = useState("rub");

  return (
    <div className={styles.mainBlock}>
      <FlightFilter currency={currency} setCurrency={setCurrency} />
      <div className={styles.cardsWrapper}>
        {data.tickets.map((ticket) => (
          <Card ticketData={ticket} />
        ))}
      </div>
    </div>
  );
};
