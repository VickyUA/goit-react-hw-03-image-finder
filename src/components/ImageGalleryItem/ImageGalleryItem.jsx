import { Component } from 'react';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.largeImageURL);
  };

  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
        onClick={this.handleClick}
      />
    );
  }
}

export default ImageGalleryItem;
