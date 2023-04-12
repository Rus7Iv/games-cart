import Link from 'next/link';
import Image from 'next/image';
import styles from '../CategoryCard/CategoryCard.module.css';

export default function CategoryCard({ image, name }){
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={200} width={400} />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};