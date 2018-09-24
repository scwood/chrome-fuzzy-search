import React, {Component, Fragment} from 'react'

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
      <Fragment>
        <SearchBar onChange={this.handleSearch} />
        <SearchResults searchQuery={this.searchQuery} />
      </Fragment>
    )
  }
}
