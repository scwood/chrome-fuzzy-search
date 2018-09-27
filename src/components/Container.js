import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.array,
  }

  render() {
    return (
      <div style={{width: 500, fontSize: 15, overflow: 'hidden', padding: 10}}>
        {this.props.children}
      </div>
    )
  }
}
