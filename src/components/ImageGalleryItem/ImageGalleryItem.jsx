import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, modalSrc }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={src} alt={alt} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
