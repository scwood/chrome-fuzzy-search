import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children}) => (
  <div
    style={{
      width: 500,
      fontFamily: 'sans-serif',
      fontSize: 14,
    }}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
