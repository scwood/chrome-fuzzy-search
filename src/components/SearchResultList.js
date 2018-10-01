import React, {Component, Fragment} from 'react'
import {PropTypes} from 'prop-types'

import chrome from '../lib/chrome'
import SearchResult from './SearchResult'
import Keybinds from './Keybinds'
import getSimilarityScore from '../lib/getSimilarityScore'

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
    return searchQuery.trim() === ''
      ? []
      : tabs
          .map((tab) => ({
            tab,
            score: Math.max(
              getSimilarityScore(tab.title, searchQuery),
              getSimilarityScore(this.stripHttpWww(tab.url), searchQuery),
            ),
          }))
          .filter(({score}) => score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 10)
          .map(({tab}) => tab)
  }

  handleEnter = () => {
    const selectedTab = this.state.filteredTabs[this.state.selectedTabIndex]
    chrome.activateTab(selectedTab)
    window.close()
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

  stripHttpWww = (url) => {
    return url.replace(/^https?:\/\/(www\.)?/, '')
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
