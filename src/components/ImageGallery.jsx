import css from 'components/styles.module.css';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import axios from 'axios';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchInput !== this.props.searchInput) {
      this.setState({ isLoading: true, pictures: [] });
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${this.props.searchInput}&page=1&key=41535540-3e2fcae5f9a93b6d79476b27b&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ pictures: response.data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { error, isLoading, pictures } = this.state;

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

// const ImageGallery = ({ pictures }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {pictures.map(({ id, webformatURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           id={id}
//           webformatURL={webformatURL}
//           tags={tags}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
