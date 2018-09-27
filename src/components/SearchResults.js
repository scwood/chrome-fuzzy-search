import React, {Component, Fragment} from 'react'
import {PropTypes} from 'prop-types'

import chrome from '../lib/chrome'

export default class SearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  }

  state = {
    tabs: [],
  }

  componentDidMount() {
    chrome.getTabs().then((tabs) => this.setState({tabs}))
  }

  getFilteredTabs = () => {
    if (this.props.searchQuery.trim() === '') {
      return []
    }
    return this.state.tabs.filter(({url, title}) => {
      return (
        this.isPartialMatch(this.props.searchQuery, url) ||
        this.isPartialMatch(this.props.searchQuery, title)
      )
    })
  }

  isPartialMatch = (substring, string) => {
    substring = substring.toLowerCase()
    string = string.toLowerCase()
    let i = 0
    for (let j = 0; j < string.length; j++) {
      if (string.charAt(j) === substring.charAt(i)) {
        i++
      }
      if (i === substring.length) {
        return true
      }
    }
    return false
  }

  render() {
    const filteredTabs = this.getFilteredTabs()
    return filteredTabs.map(({title, id}) => {
      return <Fragment key={id}>{title}</Fragment>
    })
  }
}
