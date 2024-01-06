import css from 'components/styles.module.css';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { error, isLoading, pictures } = this.props;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {isLoading && <p>Loading...</p>}

        {pictures.length > 0 && (
          <ul className={css.ImageGallery}>
            {pictures.map(pictures => (
              <li className={css.ImageGalleryItem} key={pictures.id}>
                <ImageGalleryItem pictures={pictures} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
