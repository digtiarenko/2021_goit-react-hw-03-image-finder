import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';
import propTypes from 'prop-types';

const ImageGallery = ({ images, onClickImg }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          onClickImg={onClickImg}
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          modalSrc={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
};

export default ImageGallery;
