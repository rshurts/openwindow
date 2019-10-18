import React from 'react'
import PropTypes from 'prop-types'
import BlockText from '../block-text'
import imageUrlFor from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const People = ({ title, people, _rawBody }) => {
  return (
    <>
      <h2>{title}</h2>
      <BlockText blocks={_rawBody} />
      <ul>
        {people.map(person => {
          return (
            <li key={person.staff.id}>
              {person.staff.headshot && person.staff.headshot.asset && (
                <img
                  src={imageUrlFor(buildImageObj(person.staff.headshot))
                    .width(120)
                    .height(120)
                    .fit('crop')}
                  alt={person.staff.name}
                />
              )}
              {person.staff.name} - {person.staff.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

People.defaultProps = {
  title: '',
  people: [],
  _rawBody: [],
}

People.propTypes = {
  title: PropTypes.string,
  people: PropTypes.arrayOf(PropTypes.object),
  _rawBody: PropTypes.arrayOf(PropTypes.object),
}

export default People
