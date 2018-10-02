import {Component} from 'react'
import PropTypes from 'prop-types'

const KEYS = {
  ENTER: 13,
  UP: 38,
  DOWN: 40,
  N: 78,
  P: 80,
}

class Keybinds extends Component {
  static propTypes = {
    onEnter: PropTypes.func.isRequired,
    onUp: PropTypes.func.isRequired,
    onDown: PropTypes.func.isRequired,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = (event) => {
    let action
    switch (event.keyCode) {
      case KEYS.ENTER:
        action = this.props.onEnter
        break
      case KEYS.UP:
        action = this.props.onUp
        break
      case KEYS.P:
        action = event.ctrlKey && this.props.onUp
        break
      case KEYS.DOWN:
        action = this.props.onDown
        break
      case KEYS.N:
        action = event.ctrlKey && this.props.onDown
    }
    if (action) {
      action()
      event.preventDefault()
    }
  }

  render() {
    return null
  }
}

export default Keybinds
