import cn from "classnames";
import styles from "./Card.module.scss";
import logo from "../../../public/turkish_Airlines_logo_2019_compact.png";

type TicketData = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

export const Card = (props: { ticketData: TicketData }) => {
  const { ticketData } = props;

  return (
    <div className="card">
      <div className="firstCardGroup">
        <div className="firstCardGroupContent">
          <img
            className="aviaCompanyImage"
            src={logo}
            alt=""
            height={60}
            width={150}
          />
          <button className={styles.buyButton}>
            <div>Купить</div>
            за {ticketData.price} Р
          </button>
        </div>
      </div>
      <div className="secondCardGroup">
        <div className="secondCardGroupContent">
          <div className={cn("cardInfoItem", "departureInfo")}>
            <span className="ticketTime">{ticketData.departure_time}</span>
            <div className="departure">
              {ticketData.origin}, {ticketData.origin_name}
            </div>
            <div className="date">{ticketData.departure_date}</div>
          </div>

          <div className="cardInfoItem">
            <div className="stopsGroup">
              <span>{ticketData.stops} ПЕРЕСАДКА</span>
              <div className="flyLine"></div>
            </div>
          </div>

          <div className={cn("cardInfoItem", "arrivalInfo")}>
            <div className="ticketTime">{ticketData.arrival_time}</div>
            <div className="departure">
              {ticketData.destination_name}, {ticketData.destination}
            </div>
            <div className="date">{ticketData.arrival_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
