import React from 'react'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'

import defaultFavicon from './defaultFavicon.png'

const TruncatedTextWithBackground = styled.div`
  background-color: ${(props) => (props.selected ? '#F2F2F2' : 'white')};
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.selected ? '#E0E0E0' : '#EEEEEE')};
  }
`

const Favicon = styled.img.attrs({
  alt: 'favicon',
})`
  vertical-align: middle;
  height: 16px;
  margin-right: 15px;
  margin-left: 7px;
`

const SearchResult = ({selected, onClick, tab: {title, favIconUrl}}) => (
  <TruncatedTextWithBackground selected={selected} onClick={onClick}>
    <Favicon src={favIconUrl || defaultFavicon} />
    {title}
  </TruncatedTextWithBackground>
)

SearchResult.propTypes = {
  selected: PropTypes.bool,
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    favIconUrl: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
}

export default SearchResult
