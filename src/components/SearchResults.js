import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

import chrome from '../lib/chrome'
import TabRow from './TabRow'

export default class SearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  }

  state = {
    tabs: [],
    selectedTabIndex: 0,
  }

  componentDidMount() {
    chrome.getTabs().then((tabs) => this.setState({tabs}))
  }

  getFilteredTabs = () => {
    if (this.props.searchQuery.trim() === '') {
      return []
    }
    return this.state.tabs
      .filter(
        ({url, title}) =>
          this.isPartialMatch(this.props.searchQuery, url) ||
          this.isPartialMatch(this.props.searchQuery, title),
      )
      .slice(0, 10)
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
    return this.getFilteredTabs().map((tab, i) => (
      <TabRow
        selected={this.state.selectedTabIndex === i}
        key={tab.id}
        tab={tab}
      />
    ))
  }
}
