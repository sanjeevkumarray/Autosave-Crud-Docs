

import styles from "./ContentWrapper.module.css";

export default function ContentWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
