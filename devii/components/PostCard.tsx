import React from 'react';
import { format } from 'fecha';
import { PostData } from '../utils/loader';
import { Tag } from './Tag';
import getConfig from 'next/config'

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  const {publicRuntimeConfig} = getConfig()
  return (
    <a className="post-card" href={`${publicRuntimeConfig.basePath}/${post.path}`}>
      <div className="post-card-inner">
        {post.thumbnailPhoto && (
          <div
            className="post-card-thumbnail"
            style={{ backgroundImage: `url(${post.thumbnailPhoto})` }}
          />
        )}
        <div className="post-card-title">
          {post.title && <h2>{post.title}</h2>}
          {false && post.subtitle && <p>{post.subtitle}</p>}
          <p>
            {props.post.datePublished
              ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY')
              : ''}
          </p>
          <div className="flex-spacer"> </div>
          {false && (
            <div className="tag-container">
              {post.tags && (post.tags || []).map((tag) => <Tag tag={tag} />)}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
