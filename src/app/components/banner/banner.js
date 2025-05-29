import styles from "../../page.module.css"
import Image from 'next/image';

export default function Banner() {
    return(
        <section id="home" className={styles.banner}>
        <Image src="/images/banner.webp" width={900} height={500} />
        <h2>Saigon Skateshop là cửa hàng cung cấp các sản phẩm ván trượt lâu đời và uy tín nhất tại Việt Nam, được cộng đồng trượt trên cả nước tin tưởng và lựa chọn.</h2>
        </section>
    )
}
