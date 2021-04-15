import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const LoaderAnimation = () => {
  return (
    <div className={styles.Loader}>
      <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
    </div>
  );
};

export default LoaderAnimation;
