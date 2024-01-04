import css from 'components/styles.module.css';

const ImageGalleryItem = ({ pictures: { webformatURL, tags } }) => {
  return (
    <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} />
  );
};

export default ImageGalleryItem;
