import React, { useEffect, useMemo, useState } from "react";
import styles from "./Timer.module.scss";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

const Timer = ({ deadline = new Date().toString() }) => {
  const parsedDeadLine = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadLine - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadLine - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadLine]);
  return (
    <>
      <div className={styles.timer}>
        <p className={styles.timerInfo}>Auction ends in:</p>
        <div className={styles.timerContainer}>
          {Object.entries({
            Hours: (time / HOUR) % 24,
            Minutes: (time / MINUTE) % 60,
            Seconds: (time / SECOND) % 60,
          }).map(([label, value]) => (
            <div key={label} className={styles.timerBox}>
              <span className={styles.unitOfTime}>
                {`${Math.floor(value)}`.padStart(2, "0")}
              </span>
              <span className={styles.timerTitle}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timer;
