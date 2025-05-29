import Image from 'next/image'; // Import the Image component
import styles from "../../page.module.css"; // Import the CSS module
import Link from "next/link";

// Define the Body component
export default function Body() {
  return (
    <div className={styles.body}>
      <section id="menu" className={styles.menu}>
        <h2>Các mẫu sản phẩm của chúng tôi</h2>
        <div className={styles.giayList}>
          <Link href="/sanpham1">
          <div className={styles.giayItem}>
            <Image src="/images/product-1.jpg" alt="Ván Trượt Skateboard PENTAGON SKATEBOTS STARMASTER CUSTOM COMPLETE" width={200} height={150} />
            <h5>Ván Trượt Skateboard PENTAGON SKATEBOTS STARMASTER CUSTOM COMPLETE</h5>
            <p>Giá: 1.500.000đ</p>
            <p>Ván trượt grafity màu mè</p>
          </div>
          </Link>
          <Link href="/sanpham2">
          <div className={styles.giayItem}>
            <Image src="/images/product-2.jpg" alt="Mặt Ván Trượt Skateboard SAIGON SKATESHOP DOODLE PUSHING DECK" width={200} height={150} />
            <h5>Mặt Ván Trượt Skateboard SAIGON SKATESHOP DOODLE PUSHING DECK</h5>
            <p>Giá: 1.300.000đ</p>
            <p>Ván trượt vàng huyền bí</p>
          </div>
          </Link>
          <Link href="/sanpham3">
          <div className={styles.giayItem}>
            <Image src="/images/product-3.jpg" alt="SAIGON SKATESHOP OG LOGO PASTEL GREEN CUSTOM COMPLETE 8.5" width={200} height={150} />
            <h5>SAIGON SKATESHOP OG LOGO PASTEL GREEN CUSTOM COMPLETE 8.5</h5>
            <p>Giá: 1.400.000đ</p>
            <p>Ván trượt cơ bản</p>
          </div>
          </Link>
          <div className={styles.giayItem}>
            <Image src="/images/product-4.jpg" alt="PENTAGON SWEET SWERVE YELLOW DECK 8.0" width={200} height={150} />
            <h5>PENTAGON SWEET SWERVE YELLOW DECK 8.0</h5>
            <p>Giá: 1.600.000đ</p>
            <p>Ván trượt Oni</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-5.jpg" alt="PENTAGON SUPER HERO DECK 8.0" width={200} height={150} />
            <h5>PENTAGON SUPER HERO DECK 8.0</h5>
            <p>Giá: 1.700.000đ</p>
            <p>Ván trượt quang cực</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-6.jpg" alt="PENTAGON TECH BEAST DECK 8.0" width={200} height={150} />
            <h5>PENTAGON TECH BEAST DECK 8.0</h5>
            <p>Giá: 1.800.000đ</p>
            <p>Ván trượt cơ bản màu đỏ</p>
          </div>
        </div>
      </section>
      <section id="menu" className={styles.menu}>
        <Link href="/chitietsanpham/">
        <div className={styles.giayList}>
          {/* Repeat for each product */}
          <div className={styles.giayItem}>
            <Image src="/images/product-7.jpg" alt="PENTAGON STAR CHASER BLACK DECK 8.0" width={200} height={150} />
            <h5>PENTAGON STAR CHASER BLACK DECK 8.0</h5>
            <p>Giá: 1.900.000đ</p>
            <p>Ván trượt tím mộng mơ</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-8.jpg" alt="PENTAGON SKATE IN THE HELL DECK 8.0" width={200} height={150} />
            <h5>PENTAGON SKATE IN THE HELL DECK 8.0</h5>
            <p>Giá: 2.000.000đ</p>
            <p>Ván trượt phối màu đặc sắc</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-9.jpg" alt="PENTAGON STREET CHAOS COMPLETE 8.0" width={200} height={150} />
            <h5>PENTAGON STREET CHAOS COMPLETE 8.0</h5>
            <p>Giá: 1.200.000đ</p>
            <p>Ván trượt in Bia Saigon</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-10.jpg" alt="PENTAGON STREET RIDE COMPLETE 8.0" width={200} height={150} />
            <h5>PENTAGON STREET RIDE COMPLETE 8.0</h5>
            <p>Giá: 1.100.000đ</p>
            <p>Ván trượt lòe loẹt</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-11.jpg" alt="PENTAGON TRIPPY SKATE CLUB COMPLETE 8.0" width={200} height={150} />
            <h5>PENTAGON TRIPPY SKATE CLUB COMPLETE 8.0</h5>
            <p>Giá: 1.000.000đ</p>
            <p>Ván trượt cơ bản</p>
          </div>
          <div className={styles.giayItem}>
            <Image src="/images/product-12.jpg" alt="SAIGON SKATESHOP OG LOGO BLACK/GOLD DECK 8.25" width={200} height={150} />
            <h5>SAIGON SKATESHOP OG LOGO BLACK/GOLD DECK 8.25</h5>
            <p>Giá: 900.000đ</p>
            <p>Ván trượt vàng đen lấp lánh</p>
          </div>
        </div>
        </Link>
      </section>
    </div>
  );
}
