import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

export default class SearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  }

  state = {
    tabs: [],
  }

  componentDidMount() {
    this.fetchTabs(this.props.searchQuery)
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.fetchTabs(this.props.searchQuery)
    }
  }

  fetchTabs = (searchQuery) => {
    window.chrome.tabs.query({title: searchQuery}, (tabs) => {
      console.log(tabs)
      this.setState({tabs})
    })
  }

  render() {
    return this.state.tabs.map((result, index) => {
      return <p>{result}</p>
    })
  }
}
