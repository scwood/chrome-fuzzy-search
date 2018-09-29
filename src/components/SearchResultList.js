import React, {Component, Fragment} from 'react'
import {PropTypes} from 'prop-types'

import chrome from '../lib/chrome'
import SearchResult from './SearchResult'
import Keybinds from './Keybinds'

class SearchResultList extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  }

  state = {
    tabs: [],
    filteredTabs: [],
    selectedTabIndex: 0,
  }

  componentDidMount() {
    chrome.getTabs().then((tabs) => {
      this.setState({
        tabs,
        filteredTabs: this.getFilteredTabs(tabs, this.props.searchQuery),
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({
        filteredTabs: this.getFilteredTabs(
          this.state.tabs,
          this.props.searchQuery,
        ),
      })
    }
  }

  getFilteredTabs = (tabs, searchQuery) => {
    if (searchQuery.trim() === '') {
      return []
    }
    return tabs
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

  handleEnter = () => {
    const selectedTab = this.state.filteredTabs[this.state.selectedTabIndex]
    chrome.activateTab(selectedTab)
  }

  handleUp = () => {
    if (this.state.selectedTabIndex > 0) {
      this.setState({selectedTabIndex: this.state.selectedTabIndex - 1})
    }
  }

  handleDown = () => {
    if (this.state.selectedTabIndex < this.state.filteredTabs.length - 1) {
      this.setState({selectedTabIndex: this.state.selectedTabIndex + 1})
    }
  }

  render() {
    return (
      <Fragment>
        <Keybinds
          onEnter={this.handleEnter}
          onUp={this.handleUp}
          onDown={this.handleDown}
        />
        {this.state.filteredTabs.map((tab, i) => (
          <SearchResult
            selected={this.state.selectedTabIndex === i}
            onClick={() =>
              this.setState({selectedTabIndex: i}, this.handleEnter)
            }
            key={tab.id}
            tab={tab}
          />
        ))}
      </Fragment>
    )
  }
}

export default SearchResultList
