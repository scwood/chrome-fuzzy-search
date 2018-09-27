import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

export default class SearchBar extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.inputRef.focus()
  }

  render() {
    return (
      <input
        placeholder="Search tabs, bookmarks, etc."
        style={{
          width: '100%',
          border: 'none',
          padding: 7,
          fontSize: 15,
          'box-sizing': 'border-box',
          '-moz-box-sizing': 'border-box',
        }}
        ref={(input) => (this.inputRef = input)}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    )
  }
}
