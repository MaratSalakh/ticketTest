import cn from "classnames";
import styles from "./Card.module.scss";
import logo from "../../assets/turkish_Airlines_logo_2019_compact.png";

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

export const Card = (props: { ticketData: TicketData; currency: string }) => {
  const { ticketData, currency } = props;

  const priceMatcher = (price: number, localCurrency: string) => {
    switch (localCurrency) {
      case "rub":
        return <>{price} &#8381;</>;
      case "usd":
        return <>{(price / 100).toFixed(1)} $</>;
      case "eur":
        return <>{(price / 110).toFixed(1)} &#8364;</>;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.firstCardGroup}>
        <div className={styles.firstCardGroupContent}>
          <img
            className={styles.aviaCompanyImage}
            src={logo}
            alt=""
            height={60}
            width={150}
          />
          <button className={styles.buyButton}>
            <div>Купить</div>
            за {priceMatcher(ticketData.price, currency)}
          </button>
        </div>
      </div>

      <div className={styles.secondCardGroup}>
        <div className={styles.secondCardGroupContent}>
          <div className={cn(styles.cardInfoItem, styles.departureInfo)}>
            <span className={styles.ticketTime}>
              {ticketData.departure_time}
            </span>
            <div className={styles.departure}>
              {ticketData.origin}, {ticketData.origin_name}
            </div>
            <div className={styles.date}>{ticketData.departure_date}</div>
          </div>

          <div className={styles.cardInfoItem}>
            <div className={styles.stopsGroup}>
              <span>{ticketData.stops} ПЕРЕСАДКА</span>
              <div className={styles.flyLine}></div>
            </div>
          </div>

          <div className={cn(styles.cardInfoItem, styles.arrivalInfo)}>
            <div className={styles.ticketTime}>{ticketData.arrival_time}</div>
            <div className={styles.departure}>
              {ticketData.destination_name}, {ticketData.destination}
            </div>
            <div className={styles.date}>{ticketData.arrival_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
