import styles from "../../page.module.css";  // Adjust the import path if necessary

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Contact Information */}
        <div className={styles.contact}>
          <h4>Thông tin mặt hàng</h4>
          <p>Saigon Skateshop</p>
          <p>Address: 123 Skate Park Rd, Ho Chi Minh City, Vietnam</p>
          <p>Email: <a href="mailto:hieupham06122008@gmail.com">info@saigonsskateshop.com</a></p>
          <p>Phone: (+84) 123 456 789</p>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <h4>Phạm Trí Hiếu</h4>
          <div className={styles.socialIcons}>
            {/* Add your social media icons here */}
          </div>
        </div>

        {/* Quick Links (commented out or you can enable it if needed) */}
        {/* 
        <div className={styles.quickLinks}>
          <h4>Chọn nhanh</h4>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/sanpham">Mặt hàng</Link></li>
            <li><Link href="/diachi">Địa chỉ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div> 
        */}

        {/* Newsletter Signup */}
        <div className={styles.newsletter}>
          <h4>Vẫn đang cập nhập</h4>
          <p>Đăng nhập để được nhiều thông tin!</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Nhập mail." required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Saigon Skateshop</p>
      </div>
    </div>
  );
};

export default Footer;
