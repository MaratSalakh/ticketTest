import { data } from "./assets/data";
import "./index.css";
import "./styles.css";
import { Card } from "./components/Card/Card";

export const App = () => {
  return (
    <div className="mainBlock">
      <div></div>
      <div className="cardsWrapper">
        {data.tickets.map((ticket) => (
          <Card ticketData={ticket} />
        ))}
      </div>
    </div>
  );
};
