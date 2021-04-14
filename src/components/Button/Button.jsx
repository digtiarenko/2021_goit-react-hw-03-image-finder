import styles from './Button.module.css';

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

export default Button;
