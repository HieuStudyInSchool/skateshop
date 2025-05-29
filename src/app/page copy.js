import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Header } from "./components/header/header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Shondo Store</title>
      </Head>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerleft}>
          <Image src="/images/logo.jpg" alt="Logo" width={400} height={200} />
        </div>
        <div className={styles.headerright}>
          <h1>Welcome to Saigon Skateshop</h1>
        </div>
      </div>
      {/* Navbar */}
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
    
      <section id="home" className={styles.banner}>
          <Image src="/images/banner.webp" width={900} height={500} />
          <h2>Saigon Skateshop là cửa hàng cung cấp các sản phẩm ván trượt lâu đời và uy tín nhất tại Việt Nam, được cộng đồng trượt trên cả nước tin tưởng và lựa chọn.</h2>
        </section>
        <div className={styles.body}>
        <section id="menu" className={styles.menu}>
          <h2>Các mẫu sản phẩm của chúng tôi</h2>
          <div className={styles.giayList}>
            <div className={styles.giayItem}>
              <Image src="/images/product-1.jpg" alt="Món ăn 1" width={200} height={150} />
              <h5>Ván Trượt Skateboard PENTAGON SKATEBOTS STARMASTER CUSTOM COMPLETE</h5>
              <p>Giá: 1.500.000đ</p>
              <p>Ván trượt grafity màu mè</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-2.jpg" alt="Món ăn 2" width={200} height={150} />
              <h5>Mặt Ván Trượt Skateboard SAIGON SKATESHOP DOODLE PUSHING DECK</h5>
              <p>Giá: 1.300.000đ</p>
              <p>Ván trượt vàng huyền bí</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-3.jpg" alt="Món ăn 3" width={200} height={150} />
              <h5>SAIGON SKATESHOP OG LOGO PASTEL GREEN CUSTOM COMPLETE 8.5</h5>
              <p>Giá: 1.400.000đ</p>
              <p>Ván trượt cơ bản</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-4.jpg" alt="Món ăn 4" width={200} height={150} />
              <h5>PENTAGON SWEET SWERVE YELLOW DECK 8.0</h5>
              <p>Giá: 1.600.000đ</p>
              <p>Ván trượt Oni </p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-5.jpg" alt="Món ăn 5" width={200} height={150} />
              <h5>PENTAGON SUPER HERO DECK 8.0</h5>
              <p>Giá: 1.700.000đ</p>
              <p>Ván trượt quang cực</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-6.jpg" alt="Món ăn 6" width={200} height={150} />
              <h5>PENTAGON TECH BEAST DECK 8.0</h5>
              <p>Giá: 1.800.000đ</p>
              <p>Ván trượt cơ bản màu đỏ</p>
            </div>
          </div>
        </section>
        <section id="menu" className={styles.menu}>

          <div className={styles.giayList}>
            <div className={styles.giayItem}>
              <Image src="/images/product-7.jpg" alt="Món ăn 1" width={200} height={150} />
              <h5>PENTAGON STAR CHASER BLACK DECK 8.0</h5>
              <p>Giá: 1.900.000đ</p>
              <p>Ván trượt tím mộng mơ</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-8.jpg" alt="Món ăn 2" width={200} height={150} />
              <h5>PENTAGON SKATE IN THE HELL DECK 8.0</h5>
              <p>Giá: 2.000.000đ</p>
              <p>Ván trượt phối màu đặc sắc</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-9.jpg" alt="Món ăn 3" width={200} height={150} />
              <h5>PENTAGON STREET CHAOS COMPLETE 8.0</h5>
              <p>Giá: 1.200.000đ</p>
              <p>Ván trượt in Bia Saigon</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-10.jpg" alt="Món ăn 4" width={200} height={150} />
              <h5>PENTAGON STREET RIDE COMPLETE 8.0</h5>
              <p>Giá: 1.100.000đ</p>
              <p>Ván trượt lòe loẹt</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-11.jpg" alt="Món ăn 5" width={200} height={150} />
              <h5>PENTAGON TRIPPY SKATE CLUB COMPLETE 8.0</h5>
              <p>Giá: 1.000.000đ</p>
              <p>Ván trượt cơ bản</p>
            </div>
            <div className={styles.giayItem}>
              <Image src="/images/product-12.jpg" alt="Món ăn 6" width={200} height={150} />
              <h5>SAIGON SKATESHOP OG LOGO BLACK/GOLD DECK 8.25</h5>
              <p>Giá: 900.000đ</p>
              <p>Ván trượt vàng đen lấp lánh</p>
            </div>
          </div>
        </section>

      </div>
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
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h4>Chọn nhanh</h4>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/sanpham">Mặt hàng</Link></li>
            <li><Link href="/diachi">Địa chỉ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

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
    </>
  );
}
