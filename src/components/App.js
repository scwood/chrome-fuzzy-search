import React, {Component} from 'react'

import Container from './Container'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

export default class App extends Component {
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
        <SearchResults searchQuery={this.state.searchQuery} />
      </Container>
    )
  }
}
