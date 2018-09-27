import React from 'react'
import {PropTypes} from 'prop-types'

import defaultFavicon from './defaultFavicon.png'

const TabRow = ({selected, tab: {title, favIconUrl}}) => (
  <div
    style={{
      backgroundColor: selected ? '#F1F3F4' : 'white',
      padding: 10,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
  >
    <img
      alt="favicon"
      style={{
        verticalAlign: 'middle',
        height: 16,
        marginRight: 15,
        marginLeft: 7,
      }}
      src={favIconUrl || defaultFavicon}
    />
    {title}
  </div>
)

TabRow.propTypes = {
  selected: PropTypes.bool,
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    favIconUrl: PropTypes.string,
  }),
}

export default TabRow
