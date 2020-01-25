import React from 'react'
import { buildImageObj } from '../lib/helpers'
import imageUrlFor from '../lib/image-url'

function ucfirst(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

function RoleList({ items, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item._key}>
            <div>
              <div>
                {item.staff &&
                  item.staff.headshot &&
                  item.staff.headshot.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(item.staff.headshot))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=""
                    />
                  )}
              </div>
            </div>
            <div>
              <div>
                <strong>
                  {(item.staff && item.staff.name) || <em>Missing</em>}
                </strong>
              </div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>
                      case idx === item.roles.length - 1:
                        return <span key={role}> &{role}</span>
                      default:
                        return <span key={role}>,{role}</span>
                    }
                  })}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoleList
