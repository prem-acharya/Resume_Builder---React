import React, { useState, useEffect } from "react";
import styles from "./Counts.module.css";

const Counts = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    const animateCount = (currentCount, targetCount, setterFunc, step = 1, intervalDuration = 10) => {
      if (currentCount < targetCount) {
        const timeout = setTimeout(() => {
          const nextCount = currentCount + step;
          setterFunc(nextCount);
          animateCount(nextCount, targetCount, setterFunc, step, intervalDuration);
        }, intervalDuration);
        return () => clearTimeout(timeout);
      }
    };

    animateCount(0, 1000, setVisitCount, 5); // Animate visit count to 1000
    animateCount(0, 500, setDownloadCount, 2); // Animate download count to 500
  }, []);

  return (
    <div className={styles.counterBox}>
      <div className={styles.counterBox}>
        <h2>Website Visit Count: {visitCount}+</h2>
      </div>
      <div className={styles.counterBox}>
        <h2>Resume Download Count: {downloadCount}+</h2>
      </div>
    </div>
  );
};

export default Counts;
