import css from 'components/styles.module.css';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
