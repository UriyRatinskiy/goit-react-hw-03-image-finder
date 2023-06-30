import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }


  onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className={css.overlay} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img src={image.largeImageURL} alt={'Tags: ' + image.tags} />
        </div>
      </div>
    );
  }
}

Modal.types = {
  image: PropTypes.object.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
