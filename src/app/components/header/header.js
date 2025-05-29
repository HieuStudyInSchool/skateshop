import styles from "../../page.module.css";
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerleft}>
        <Image src="/images/logo.jpg" alt="Logo" width={400} height={200} />
      </div>
      <div className={styles.headerright}>
        <h1>Welcome to Saigon Skateshop</h1>
      </div>
    </div>
  );
};

export default Header;
