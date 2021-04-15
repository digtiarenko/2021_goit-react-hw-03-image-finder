import styles from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, modalSrc, onClickImg }) => {
  const handleClick = () => {
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
ImageGalleryItem.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  modalSrc: propTypes.string.isRequired,
  onClickImg: propTypes.func.isRequired,
};

export default ImageGalleryItem;
