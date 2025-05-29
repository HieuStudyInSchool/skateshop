'use client';

import styles from './sanpham1.module.css';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function ProductPage() {
  const images = [
    "/images/product-1.jpg",
    "/images/product-2.jpg",
    "/images/product-3.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Shondo sandal ${index + 1}`} className={styles.productImage} />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.infoSection}>
        <h2 className={styles.name}>Ván Trượt Skateboard PENTAGON SKATEBOTS STARMASTER CUSTOM COMPLETE</h2>
        <p className={styles.code}>Mã sản phẩm: #000001</p>

        <div className={styles.priceBox}>
          <span className={styles.discounted}>1.500.000 đ</span>
          <span className={styles.original}>3.000.000 đ</span>
          <span className={styles.label}>TIẾT KIỆM 50%</span>
        </div>

        <p className={styles.color}>MÀU SẮC: Xám</p>

        <div className={styles.sizeBox}>
          <p>Size:</p>
          <div className={styles.sizes}>
            {['M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size} className={size === '36' ? styles.activeSize : styles.sizeBtn}>
                {size}
              </button>
            ))}
          </div>
          <p className={styles.stock}>Hãy sẵn sàng cho một số trò chơi fingerboard vui nhộn với Cat in the Hat! Ván trượt 32mm/34mm & 100mm này có hình dán mèo đội mũ dễ thương. Hoàn hảo cho những người đam mê trượt ván, ván trượt fingerboard này cho phép bạn thực hiện các pha nhào lộn và nhào lộn một cách dễ dàng.
             Mang một chút cá tính vào trò chơi trượt ván của bạn với ván trượt fingerboard Cat in the Hat!</p>
        </div>

        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className={styles.cartBtn}>Thêm vào giỏ hàng</button>
          <button className={styles.buyBtn}>Mua ngay</button>
        </div>
      </div>
    </div>
  );
}
