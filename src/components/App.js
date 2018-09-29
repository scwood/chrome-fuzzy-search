import React, {Component} from 'react'

import Container from './Container'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

class App extends Component {
  state = {
    searchQuery: '',
  }

  handleSearch = (searchQuery) => {
    this.setState({searchQuery})
  }

  render() {
    return (
      <Container>
        <SearchBar onChange={this.handleSearch} />
        <SearchResultList searchQuery={this.state.searchQuery} />
      </Container>
    )
  }
}

export default App
