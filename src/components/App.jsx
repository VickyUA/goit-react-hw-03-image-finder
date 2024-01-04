import { Component } from 'react';
import Searchbar from './searchbar';
import Button from './Button';
import ImageGallery from './ImageGallery';
import css from 'components/styles.module.css';
// import api from '../api/api';
// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
    searchInput: '',
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     // const pictures = api.fetchPictures('react');
  //     // this.setState({ pictures });

  //     const response = await axios.get(
  //       `https://pixabay.com/api/?q=${this.state.searchInput}&page=1&key=41535540-3e2fcae5f9a93b6d79476b27b&image_type=photo&orientation=horizontal&per_page=12`
  //     );
  //     this.setState({ pictures: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchInput !== this.state.searchInput) {
  //     this.setState({ isLoading: true });
  //     try {
  //       const response = await axios.get(
  //         `https://pixabay.com/api/?q=${this.state.searchInput}&page=1&key=41535540-3e2fcae5f9a93b6d79476b27b&image_type=photo&orientation=horizontal&per_page=12`
  //       );
  //       this.setState({ pictures: response.data.hits });
  //     } catch (error) {
  //       this.setState({ error });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }

  handleFormSubmit = searchInput => {
    this.setState({ searchInput: searchInput });
    console.log(searchInput);
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar submit={this.handleFormSubmit} />
        {/* {this.state.error && (
          <p>Whoops, something went wrong: {this.state.error.message}</p>
        )}
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.pictures.length > 0 && ( */}
        <ImageGallery searchInput={this.state.searchInput} />
        {/* )} */}

        <Button />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </div>
    );
  }
}
