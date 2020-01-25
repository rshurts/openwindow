import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid({ browseMoreHref, nodes, title }) {
  return (
    <>
      {nodes.length !== 0 && (
        <div>
          {title && (
            <h2>
              {browseMoreHref ? (
                <Link to={browseMoreHref}>{title}</Link>
              ) : (
                title
              )}
            </h2>
          )}
          <ul>
            {nodes &&
              nodes.map(node => (
                <li key={node.id}>
                  <BlogPostPreview {...node} />
                </li>
              ))}
          </ul>
          {browseMoreHref && (
            <div>
              <Link to={browseMoreHref}>Browse more</Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
