import styles from './sanpham3.module.css'

export default function ProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="images/product-3.jpg" alt="Shondo sandal" className={styles.productImage} />
      </div>

      <div className={styles.infoSection}>
        <p className={styles.code}>Mã sản phẩm: #000001</p>
        <div className={styles.priceBox}>
          <span className={styles.discounted}>1.300.000 đ</span>
          <span className={styles.original}>2.900.000 đ</span>
          <span className={styles.label}>TIẾT KIỆM 50%</span>
        </div>

        <p className={styles.color}>MÀU SẮC: Đen</p>

        <div className={styles.sizeBox}>
          <p>Size:</p>
          <div className={styles.sizes}>
            {['M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size} className={size === '36' ? styles.activeSize : styles.sizeBtn}>
                {size}
              </button>
            ))}
          </div>
          <p className={styles.stock}>• 9 trong kho</p>
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
