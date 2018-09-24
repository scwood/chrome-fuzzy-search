import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

export default class SearchBar extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.inputRef.focus()
  }

  debounce = (fn, delay = 500) => {
    let timeout
    return (...args) => {
      if (timeout) {
        clearInterval(timeout)
      }
      timeout = setTimeout(() => {
        fn(...args)
        timeout = null
      }, delay)
    }
  }

  render() {
    return (
      <input
        ref={(input) => (this.inputRef = input)}
        onChange={(e) => this.debounce(this.props.onChange)(e.target.value)}
      />
    )
  }
}
