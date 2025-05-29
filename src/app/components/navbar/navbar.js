import styles from "../../page.module.css";  

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.trangchu}>
        <h3>Trang chu</h3>
      </div>
      <div className={styles.sanpham}>
        <h3>San pham</h3>
      </div>
      <div className={styles.diachi}>
        <h3>Dia chi</h3>
      </div>
      <div className={styles.loai}>
        <h3>Loai</h3>
      </div>
      <div className={styles.searchbox}>
        <h3>Search</h3>
      </div>
    </div>
  );
};

export default Navbar;
