import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    posts {
      id
      user
      content
    }
  }
`;

const PostsTable = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>User</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {data.posts.map(post => (
          <tr key={post.id}>
            <td>{post.user}</td>
            <td>{post.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;
