import React from 'react'
import { buildImageObj } from '../lib/helpers'
import imageUrlFor from '../lib/image-url'

import styles from './role-list.module.css'

function ucfirst(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

function RoleList({ items, title }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item._key} className={styles.listItem}>
            <div>
              <div className={styles.avatar}>
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
              {item.staff.title && (
                <div>
                  {item.staff.title.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>
                      case idx === item.staff.title.length - 1:
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
