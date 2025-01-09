import cn from "classnames";
import styles from "./FlightFilter.module.scss";

export const FlightFilter = (props: {
  currency: string | undefined;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { currency, setCurrency } = props;

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
          <div className={styles.stopItem}>
            <input type="checkbox" />
            All
          </div>
          <div className={styles.stopItem}>
            <input type="checkbox" />
            Без пересадок
          </div>
          <div className={styles.stopItem}>
            <input type="checkbox" />1 пересадка
          </div>
          <div className={styles.stopItem}>
            <input type="checkbox" />2 пересадки
          </div>
          <div className={styles.stopItem}>
            <input type="checkbox" />3 пересадки
          </div>
        </div>
      </div>
    </div>
  );
};
