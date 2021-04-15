import styles from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({ onClick }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <div className={styles.ButtonDiv}>
      <button onClick={onClick} className={styles.Button} type="button">
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;
