import { Component } from 'react';
import Searchbar from './searchbar';
import Button from './Button';
import ImageGallery from './ImageGallery';
import css from 'components/styles.module.css';
import api from '../api/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    searchInput: '',
    pictures: [],
    isLoading: false,
    error: null,
    page: 1,
    buttonIsShown: false,
  };

  handleFormSubmit = searchInput => {
    this.setState({
      searchInput,
      pictures: [],
      isLoading: true,
      error: null,
      page: 1,
    });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchInput !== this.state.searchInput ||
      prevState.page !== this.state.page
    ) {
      try {
        const pictures = await api.fetchPictures(
          this.state.searchInput,
          this.state.page
        );

        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures.hits],
          buttonIsShown: this.state.page < Math.ceil(pictures.totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery
          error={this.state.error}
          isLoading={this.state.isLoading}
          pictures={this.state.pictures}
        />
        {this.state.buttonIsShown && <Button onClick={this.handleClick} />}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </div>
    );
  }
}
