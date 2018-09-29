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
    switch (event.keyCode) {
      case KEYS.ENTER:
        this.props.onEnter()
        break
      case KEYS.UP:
        this.props.onUp()
        break
      case KEYS.P:
        event.ctrlKey && this.props.onUp()
        break
      case KEYS.DOWN:
        this.props.onDown()
        break
      case KEYS.N:
        event.ctrlKey && this.props.onDown()
    }
  }

  render() {
    return null
  }
}

export default Keybinds
