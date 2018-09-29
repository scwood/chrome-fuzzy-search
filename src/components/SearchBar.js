import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'

const BorderlessInput = styled.input`
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  padding: 10px;
  width: 100%;
`

class SearchBar extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.inputRef.focus()
  }

  render() {
    return (
      <BorderlessInput
        placeholder="Go to tab..."
        innerRef={(ref) => (this.inputRef = ref)}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    )
  }
}

export default SearchBar
