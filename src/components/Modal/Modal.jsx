import { Component } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  handleCloseModal = event => {
    console.log(event);
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  };

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClick();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    return createPortal(
      <div
        className={styles.Overlay}
        onKeyPress={this.handleCloseModal}
        onClick={this.handleCloseModal}
      >
        <div className={styles.Modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
Modal.propTypes = {
  onClick: propTypes.func.isRequired,
  src: propTypes.string.isRequired,
};

export default Modal;
