import { FC } from 'react';

interface PostProps {
  data: string;
}

const Post: FC<PostProps> = ({ data }) => {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Post;
