import styles from "./Header.module.css";
export default function Header({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title} onClick={onClick}>
        <img src="/logo.png" alt="Logo" style={{ marginRight: '10px' }} />
        Docs
      </p>
    </div>
  );
}
