import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, modalSrc, onClickImg }) => {
  const handleClick = event => {
    onClickImg(modalSrc);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={styles.ImageGalleryItemImage}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
