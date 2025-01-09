import cn from "classnames";
import styles from "./FlightFilter.module.scss";

export const FlightFilter = (props: {
  currency: string | undefined;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  stops: string;
  setStops: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { currency, setCurrency, stops, setStops } = props;

  const selectedStyles = (buttonCurrency: string | undefined) => {
    return buttonCurrency === currency
      ? styles.selectedCurrency
      : styles.currencyItemHover;
  };

  return (
    <div className={styles.flightFilter}>
      <>
        <div className={styles.title}>ВАЛЮТА</div>
        <div className={styles.currency}>
          <div
            onClick={() => setCurrency("rub")}
            className={cn(styles.currencyItemLeft, selectedStyles("rub"))}
          >
            RUB
          </div>
          <div
            onClick={() => setCurrency("usd")}
            className={cn(styles.currencyItemCenter, selectedStyles("usd"))}
          >
            USD
          </div>
          <div
            onClick={() => setCurrency("eur")}
            className={cn(styles.currencyItemRight, selectedStyles("eur"))}
          >
            EUR
          </div>
        </div>
      </>

      <div className={styles.secondGroup}>
        <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
        <div className={styles.stopsCount}>
          <div onClick={() => setStops("all")} className={styles.stopItem}>
            <input type="checkbox" checked={stops === "all"} />
            All
          </div>
          <div onClick={() => setStops("0")} className={styles.stopItem}>
            <input type="checkbox" checked={stops === "0"} />
            Без пересадок
          </div>
          <div onClick={() => setStops("1")} className={styles.stopItem}>
            <input type="checkbox" checked={stops === "1"} />1 пересадка
          </div>
          <div onClick={() => setStops("2")} className={styles.stopItem}>
            <input type="checkbox" checked={stops === "2"} />2 пересадки
          </div>
          <div onClick={() => setStops("3")} className={styles.stopItem}>
            <input type="checkbox" checked={stops === "3"} />3 пересадки
          </div>
        </div>
      </div>
    </div>
  );
};
