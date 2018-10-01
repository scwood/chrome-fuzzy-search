import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'

import Container from './Container'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

injectGlobal`
  body {
    margin: 0px;
    padding: 0px;
    background-color: white;
  }
`

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
