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
        placeholder="Go to tab, bookmark, etc."
        style={{
          border: 'none',
          boxSizing: 'border-box',
          fontSize: 14,
          outline: 'none',
          padding: 10,
          width: '100%',
        }}
        ref={(input) => (this.inputRef = input)}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    )
  }
}
