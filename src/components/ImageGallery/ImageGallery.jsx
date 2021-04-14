import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickImg }) => {
  // console.log('openModal in ImageGallery', onClickImg);
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

export default ImageGallery;
