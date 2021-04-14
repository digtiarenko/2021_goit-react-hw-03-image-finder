import { Component } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import ImagesApi from './components/ImagesApi';
import LoaderAnimation from './components/Loader';
// import Modal from './components/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = {
      page,
      searchQuery,
    };

    this.setState({
      isLoading: true,
    });

    ImagesApi.fetchImages(options)
      .then(hits =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error: error }))
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { images, isLoading } = this.state;
    const shouldRenderBtn = images.length > 0 && !isLoading;

    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {isLoading && <LoaderAnimation />}
        {shouldRenderBtn && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

export default App;
